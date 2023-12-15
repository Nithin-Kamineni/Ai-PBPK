from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp.models import Departments,Employees
from aipbpk.serializers import DepartmentSerializer,EmployeeSerializer

from django.core.files.storage import default_storage
# from aipbpk.Handlers.MLModelLoaders import getModels
# from aipbpk.Handlers.DataLoader import GetData
# from aipbpk.Handlers.Predictor import prediction
from aipbpk.Handlers.MLModel import mLModel
from aipbpk.requests.DataRequest import send_post_request

import os
from dotenv import load_dotenv
load_dotenv()

# Create your views here.
@csrf_exempt
def test(request,id=0):
    if request.method=='GET':
        print(os.environ.get('DB_HOST'))
        print(os.environ.get('tesval'))
        # print("========================================")
        departments = Departments.objects.all()
        departments_serializer=DepartmentSerializer(departments,many=True)
        return JsonResponse(departments_serializer.data,safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        departments_serializer=DepartmentSerializer(data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        department_data=JSONParser().parse(request)
        department=Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        departments_serializer=DepartmentSerializer(department,data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        department=Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def testpar(request,id=0):
    if request.method=='GET':
        departments = Departments.objects.all()
        departments_serializer=DepartmentSerializer(departments,many=True)
        return JsonResponse(departments_serializer.data,safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        departments_serializer=DepartmentSerializer(data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        department_data=JSONParser().parse(request)
        department=Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        departments_serializer=DepartmentSerializer(department,data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        department=Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def test1(request,id=0):
    if request.method=='GET':
        # departments = Departments.objects.all()
        # departments_serializer=DepartmentSerializer(departments,many=True)
        # print(departments_serializer.data)
        # return JsonResponse(departments_serializer.data,safe=False)
        var = mLModel.prediction()
        print(var)
        return JsonResponse([12],safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        # departments_serializer=DepartmentSerializer(data=department_data)
        # if departments_serializer.is_valid():
        #     departments_serializer.save()
            # return JsonResponse("Added Successfully",safe=False)
        var = mLModel.prediction()
        print(var)
        # print("--------------------------------------------------------------------------")
        var = var.to_csv(index=False)
        print(var)
        print("done processing...")
        return JsonResponse({"predKmax": var},safe=False)
        # return JsonResponse("Failed to Add",safe=False)

@csrf_exempt
def test1par(request,id=0):
    if request.method=='GET':
        departments = Departments.objects.all()
        departments_serializer=DepartmentSerializer(departments,many=True)
        return JsonResponse(departments_serializer.data,safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        departments_serializer=DepartmentSerializer(data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        department_data=JSONParser().parse(request)
        department=Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        departments_serializer=DepartmentSerializer(department,data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        department=Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully",safe=False)

#send_post_request()
@csrf_exempt
def predKmaxTabledataRserver(request,id=0):
    if request.method=='POST':
        print("0-------------------------------------------------------------------------")
        user_input=JSONParser().parse(request)
        
        print(user_input)
        print("1-------------------------------------------------------------------------")
        var = mLModel.prediction(user_input)
        # print('var')
        # print(var)
        print("2-------------------------------------------------------------------------")
        # var = var.to_csv(index=False)
        #columns of the dataframe
        columns = list(var.columns)
        # Convert DataFrame to the desired format
        formatted_data = []
        for index, row in var.iterrows():
            tempdate={}
            for column in columns:
                tempdate[column]=float(row[column])
            formatted_data.append(tempdate)

        BW=user_input['BW']
        Dose=user_input['Dose']
        # print(formatted_data)
        print("sending post request formated data...")
        response = send_post_request(formatted_data,BW,Dose)
        print("--------------------------got it-----------------------------------------------")
        response=response['list'][0]
        TimeSeries=[]
        DETumor=[]
        for dict_data in response:
            TimeSeries.append(dict_data['Time'])
            DETumor.append(dict_data['DETumor'])
        response = {"TimeSeries":TimeSeries,"DETumor":DETumor}
        
        return JsonResponse(response,safe=False)
        
@csrf_exempt
def predKmaxTabledataFrontend(request,id=0):
    if request.method=='POST':
        department_data=JSONParser().parse(request)
        # departments_serializer=DepartmentSerializer(data=department_data)
        # if departments_serializer.is_valid():
        #     departments_serializer.save()
            # return JsonResponse("Added Successfully",safe=False)
        var = mLModel.prediction()
        print(var)
        # print("--------------------------------------------------------------------------")
        # var = var.to_csv(index=False)
        #columns of the dataframe
        columns = list(var.columns)

        # Convert DataFrame to the desired format
        formatted_data = []
        for index, row in var.iterrows():
            tempdate={}
            for column in columns:
                tempdate[column]=row[column]
            formatted_data.append(tempdate)

        print(formatted_data)
        print("done processing...")
        return JsonResponse({"predKmax": formatted_data},safe=False)

@csrf_exempt
def parameterTabledataFrontend(request,id=0):
    if request.method=='GET':
        # departments_serializer=DepartmentSerializer(data=department_data)
        # if departments_serializer.is_valid():
        #     departments_serializer.save()
            # return JsonResponse("Added Successfully",safe=False)
        x,var = mLModel.GetData()
        print("000000")
        print(type(var))
        print("111111")
        # var = var.to_csv(index=False)
        #columns of the dataframe
        columns = list(var.columns)

        # Convert DataFrame to the desired format
        formatted_data = []
        for index, row in var.iterrows():
            tempdate={}
            for column in columns:
                tempdate[column]=row[column]
            formatted_data.append(tempdate)

        print(formatted_data)
        print("done processing...")
        return JsonResponse({"predKmax": formatted_data},safe=False)

@csrf_exempt
def filterParams(request,id=0):
    if request.method=='GET':
        response = mLModel.GetDataParamsForm()
        return JsonResponse(response,safe=False)

@csrf_exempt
def recordsAvilable(request,id=0):
    if request.method=='POST':
        data=JSONParser().parse(request)
        var = mLModel.NumberOfRecords(data)
        return JsonResponse(var,safe=False)

@csrf_exempt
def filteredRecordsData(request,id=0):
    if request.method=='POST':
        data=JSONParser().parse(request)
        var = mLModel.FilteredRecords(data)
        columns = list(var.columns)

        # Convert DataFrame to the desired format
        formatted_data = []
        for index, row in var.iterrows():
            tempdate={}
            for column in columns:
                tempdate[column]=row[column]
            formatted_data.append(tempdate)

        return JsonResponse({"records": formatted_data},safe=False)