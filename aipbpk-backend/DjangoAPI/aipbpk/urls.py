from django.urls import path
from aipbpk import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('test', views.test),
    path('test/<int:department_id>', views.testpar),
    path('test1', views.test1),
    path('test1/<int:employee_id>', views.test1par),
    path('predKmaxFrontend', views.predKmaxTabledataFrontend),
    path('predKmaxRserver', views.predKmaxTabledataRserver),
    path('filterParams', views.filterParams),  #dought
    path('recordsAvilable', views.recordsAvilable),
    path('filteredRecords', views.filteredRecordsData),
    path('paramsRecords',views.parameterTabledataFrontend) #dought
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
