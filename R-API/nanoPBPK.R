library(mrgsolve)
library(dplyr)
library(zoo)  # the package was loaded for the function na.locf
library(ggplot2)
library(patchwork)
library(FME)
library(Metrics)
library(tidyr)
library(mrgsolve)

script_dir <- dirname(rstudioapi::getSourceEditorContext()$path)

# Set the working directory to the script's directory
setwd(script_dir)

NanoPBPK.code <-
"
$PARAM @annotated

QCC             : 16.5   :L/h/kg^0.75, Cardio output, (Brown, 1997)
QLC             : 0.02   :unitless,  Fraction blood flow to liver,   (Brown, 1997, Table 23)
QLuC            : 1    :unitless, Fraction blood flow to lung,    (Brown, 1997, Table 23)
QKC             : 0.091  :unitless,  Fraction blood flow to kidney,  (Brown, 1997, Table 23)
QBrC            : 0.033  :unitless,  Fraction blood flow to brain,   (Brown, 1997, Table 23)
QSC             : 0.011  :unitless, Fraction blood flow to spleen,  (Lin, 2008; Davies and Morries, 1993)
QMC             : 0.159  :unitless, Fraction blood flow to muschle, (Brown, 1997, Table 23)
QTC             : 0.033  :unitless, Fraction blood flow to tumor,

BW             : 0.02   :kg,                             Body weight
VLC            : 0.055  :unitless,                       Fraction liver tissue,          (Brown, 1997, Table 21)
VLuC           : 0.007  :unitless,                       Fraction lung tissue,           (Brown, 1997, Table 21)
VKC            : 0.017  :unitless,                       Fraction kidney tissue,         (Brown, 1997, Table 21)
VBrC           : 0.017  :unitless,                       Fraction brain tissue,          (Brown, 1997, Table 21)
VSC            : 0.005  :unitless,                       Fraction spleen tissue,         (Lin, 2008; Davies and Morries, 1993)
VBldC          : 0.06   :unitless,                       Fraction blood,                 (Chen, 2015)
VPlasC         : 0.0355 :unitless,                       Fraction plasma,                (Davies and Morris, 1993
VMC            : 0.384  :unitless,                       Fraction muscle tissue,         (Brown, 1997, Table 21)
VTC            : 0.04   :unitless,                       Fraction tumor,                 (Sykes et al., 2014; Wilhelm et al., 2016)

BVL            : 0.31   :unitless,                       Liver,                          (Brown, 1997, Table 30)
BVBr           : 0.03   :unitless,                       Brain,                          (Brown, 1997, Table 30)
BVK            : 0.24   :unitless,                       Kidney,                         (Brown, 1997, Table 30)
BVS            : 0.17   :unitless,                       Spleen,                         (Brown, 1997, Table 30)
BVLu           : 0.5    :unitless,                       lungs,                          (Brown, 1997, Table 30)
BVM            : 0.04   :unitless,                       muscle,                         (Brown, 1997, Table 30)
BVR            : 0.04   :unitless,                       Rest of body (assumed to equal to muscle), (Brown, 1997, Table 30)
BVT            : 0.03   :unitless,                       tumor,                          fitted

PL             : 0.08   :unitless,                       liver,                          (Lin, 2016)
PK             : 0.15   :unitless,                       kidney,                         (Lin, 2016)
PBr            : 0.15   :unitless,                       brain,                          (Lin, 2016)
PS             : 0.15   :unitless,                       spleen,                         (Lin, 2016)
PLu            : 0.15   :unitless,                       lungs,                          (Lin, 2016)
PH             : 0.15   :unitless,                       heart,                          (Lin, 2016)
PM             : 0.15   :unitless,                       muscle,                         (Lin, 2016)
PR             : 0.15   :unitless,                       rest of body,                   (Lin, 2016)
PT             : 0.15   :unitless,                       tumor,                          fitted

PALC           : 0.001  :unitless,                       liver,                          (Lin, 2016)
PABrC          : 0.000001 :unitless,                     brain,                          (Lin, 2016)
PAKC           : 0.01   :unitless,                       kidney,                         (Lin, 2016)
PASC           : 0.15   :unitless,                       spleen,                         (Lin, 2016)
PALuC          : 0.001  :unitless,                       lung,                           (Lin, 2016)
PAMC           : 0.00005:unitless,                       muscle,                         (Lin, 2016)
PARC           : 0.00005:unitless,                       rest of body,                   (Lin, 2016)
PATC           : 0.001  :unitless,                       tumor,                          fitted

KLRESrelease   : 0.0015   :1/h,                liver,                          Release rate constant of phyagocytic cells
KLRESmax       : 0.3      :1/h,                liver,                          Maximmum uptake rate constant of phyagocytic cells
KLRES50        : 48       :h,                  liver,                          Time reaching half maximum uptake rate
KLRESn         : 5        :unitless,           liver,                          Hill coefficient
ALREScap       : 100      :ug/g tissue,        liver,                          uptake capacity per tissue weight

KSRESrelease   : 0.001    :1/h,                spleen,                         Release rate constant of phyagocytic cells
KSRESmax       : 5        :1/h,                spleen,                         Maximmum uptake rate constant of phyagocytic cells
KSRES50        : 36       :h,                  spleen,                         Time reaching half maximum uptake rate
KSRESn         : 5        :unitless,           spleen,                         Hill coefficient
ASREScap       : 200      :ug/g tissue,        spleen,                         uptake capacity per tissue weight

KKRESrelease   : 0.001    :1/h,                kidney,                         Release rate constant of phyagocytic cells
KKRESmax       : 0.12     :1/h,                kidney,                         Maximmum uptake rate constant of phyagocytic cells
KKRES50        : 48       :h,                  kidney,                         Time reaching half maximum uptake rate
KKRESn         : 5        :unitless,           kidney,                         Hill coefficient
AKREScap       : 15       :ug/g tissue,        kidney,                         uptake capacity per tissue weight

KLuRESrelease  : 0.003    :1/h,               lung,                           Release rate constant of phyagocytic cells
KLuRESmax      : 0.085    :1/h,               lung,                           Maximmum uptake rate constant of phyagocytic cells
KLuRES50       : 48       :h,                 lung,                           Time reaching half maximum uptake rate
KLuRESn        : 5        :unitless,          lung,                           Hill coefficient
ALuREScap      : 100      :ug/g tissue,       lung,                           uptake capacity per tissue weight

KMRESrelease   : 0.005    :1/h,                muscle,                         Release rate constant of phyagocytic cells
KMRESmax       : 0.4      :1/h,                muscle,                         Maximmum uptake rate constant of phyagocytic cells
KMRES50        : 48       :h,                  muscle,                         Time reaching half maximum uptake rate
KMRESn         : 5        :unitless,           muscle,                         Hill coefficient
AMREScap       : 15       :ug/g tissue,        muscle,                         uptake capacity per tissue weight

KRRESrelease   : 0.005    :1/h,                rest of body,                   Release rate constant of phyagocytic cells
KRRESmax       : 0.4      :1/h,                rest of body,                   Maximmum uptake rate constant of phyagocytic cells
KRRES50        : 48       :h,                  rest of body,                   Time reaching half maximum uptake rate
KRRESn         : 5        :unitless,           rest of body,                   Hill coefficient
ARREScap       : 15       :ug/g tissue,        rest of body,                   uptake capacity per tissue weight

KTRESrelease   : 0.005    :1/h,                tumor, Release rate constant of phyagocytic cells
KTRESmax       : 0.4      :1/h,                tumor, Maximmum uptake rate constant of phyagocytic cells
KTRES50        : 24       :h,                  tumor, Time reaching half maximum uptake rate
KTRESn         : 5        :unitless,           tumor, Hill coefficient
ATREScap       : 1        :ug/g tissue,         tumor, uptake capacity per tissue weight

KbileC         :  0.00003  :L/hr/kg^0.75,       Bile clearance
KurineC        :  0.000003 :L/hr/kg^0.75,       Urine clearance

$MAIN
double QRC     = 1 - (QLC + QKC  + QSC + QTC + QBrC + QMC);
double VRC     = 1 - (VLC + VLuC + VKC  + VSC + VBrC + VMC + VTC + VPlasC);

double QC      = QCC * pow(BW, 0.75);
double QL      = QC * QLC;
double QBr     = QC * QBrC;
double QK      = QC * QKC;
double QS      = QC * QSC;
double QM      = QC * QMC;
double QT      = QC * QTC;
double QR      = QC * QRC;

double VL      = BW * VLC;
double VBr     = BW * VBrC;
double VK      = BW * VKC;
double VM      = BW * VMC;
double VS      = BW * VSC;
double VLu     = BW * VLuC;
double VR      = BW * VRC;
double VT      = BW * VTC;
double VBlood  = BW * VBldC;
double VPlasma = BW * VPlasC;

double VLb     = VL * BVL;
double VLt     = VL - VLb;
double VBrb    = VBr * BVBr;
double VBrt    = VBr - VBrb; 
double VKb     = VK * BVK;
double VKt     = VK - VKb;
double VSb     = VS * BVS;
double VSt     = VS - VSb;
double VLub    = VLu * BVLu;
double VLut    = VLu - VLub;
double VMb     = VM * BVM;
double VMt     = VM - VMb;
double VRb     = VR * BVR;
double VRt     = VR - VRb;
double VTb     = VT * BVT;
double VTt     = VT - VTb;

double PAL     = PALC  * QL;
double PABr    = PABrC * QBr;
double PAK     = PAKC  * QK;
double PAS     = PASC  * QS;
double PALu    = PALuC * QC;
double PAM     = PAMC  * QM;
double PAR     = PARC  * QR;
double PAT     = PATC  * QT;

double KLRESUP = ((KLRESmax)*pow(TIME, KLRESn))/(pow(KLRES50, KLRESn) + pow(TIME, KLRESn));
double KSRESUP = ((KSRESmax)*pow(TIME, KSRESn))/(pow(KSRES50, KSRESn) + pow(TIME, KSRESn));
double KKRESUP = ((KKRESmax)*pow(TIME, KKRESn))/(pow(KKRES50, KKRESn) + pow(TIME, KKRESn));
double KLuRESUP = ((KLuRESmax)*pow(TIME, KLuRESn))/(pow(KLuRES50, KLuRESn) + pow(TIME, KLuRESn));
double KMRESUP  = ((KMRESmax)*pow(TIME, KMRESn))/(pow(KMRES50, KMRESn) + pow(TIME, KMRESn));
double KRRESUP  = ((KRRESmax)*pow(TIME, KRRESn))/(pow(KRRES50, KRRESn) + pow(TIME, KRRESn));

double KTRESUP1 = (KTRESmax*pow(TIME,KTRESn))/(pow(KTRES50, KTRESn) + pow(TIME, KTRESn));
double KTRESUP2 = KTRESmax*(1-(ATRES/(ATREScap*VT)));
double KTRESUP3 = 2;
double Kbile   = KbileC * pow(BW, 0.75);
double Kurine  = KurineC * pow(BW, 0.75);

$CMT AA AV ALub ALut ALuRES ABrb ABrt AMb AMt AMRES ARb ARt ARRES
AKb AKt AKRES Aurine ASb ASt ASRES ALb ALt ALRES Abile ATb ATt ATRES ATRESUP ATRESrel ADOSE
AUCTumor

$ODE

double APlasma  = AA + AV;
double ABlood   = AA + AV;
double ALung    = ALub+ALut+ALuRES;
double ALungt   = ALut+ALuRES;
double Arestall = ARb+ARt+ARRES;
double Aresttissue = ARt+ARRES;
double AKidney  = AKb+AKt+AKRES;
double AKidneyt = AKt+AKRES;
double ABrain   = ABrb + ABrt;
double ASpleen  = ASb+ASt+ASRES;
double ASpleent = ASt+ASRES;
double AMuscle  = AMb+AMt+AMRES;
double AMusclet = AMt+AMRES;
double ALiver   = ALb+ALt+ALRES;
double ALivert  = ALt+ALRES;
double ATumor   = ATb+ATt+ATRES;
double ATumort  = ATt+ATRES;


double CA       = AA/(VPlasma * 0.2);
double CV       = AV / (VPlasma * 0.8);
double CPlasma  = APlasma/VPlasma;
double CBlood   = ABlood/VBlood;
double CVLu     = ALub / VLub;
double CVL      = ALb/VLb;
double CLut     = ALut / VLut;
double CLung    = (ALub + ALut + ALuRES)/VLu;
double CLungt   = (ALut+ALuRES)/VLut;
double CVBr     = ABrb/VBrb;
double CBrt     = ABrt/VBrt;
double CBrain   = ABrain / VBr;
double CVK      = AKb/VKb;
double CVM      = AMb/VMb;
double CMt      = AMt/VMt;
double CMuscle  = (AMb+AMt+AMRES)/VM;
double CMusclet = (AMt+AMRES)/VMt;
double CVR      = ARb/VRb;
double CRt      = ARt/VRt;
double Crestall = (ARb+ARt+ARRES)/VR;
double Cresttissue = (ARt+ARRES)/VRt;
double CKt      = AKt/VKt;
double CKidney  = (AKb+AKt+AKRES)/VK;
double CKidneyt = (AKt+AKRES)/VKt;
double CVS      = ASb/VSb;
double CSt      = ASt/VSt;
double CSpleen  = (ASb+ASt+ASRES)/VS;
double CSpleent = (ASt+ASRES)/VSt;
double CLt      = ALt/VLt;
double CLiver = (ALb+ALt+ALRES)/VL;
double CLivert = (ALt+ALRES)/VLt;
double CVT     = ATb/VTb;
double CTt      = ATt/VTt;
double CTumort  = (ATt+ATRES)/VTt;
double CTumor   = (ATb+ATt+ATRES)/VT;


double RA      = QC * CVLu - QC * CA;
double RV      = QL * CVL + QBr  *CVBr + QK * CVK + QM * CVM + QR * CVR + QT * CVT - QC * CV;
double RLub    =  QC * (CV - CVLu) - PALu * CVLu + (PALu * CLut)/ PLu;
double RLut    = PALu * CVLu - (PALu * CLut)/ PLu - KLuRESUP * ALut + KLuRESrelease * ALuRES;
double RLuRES  = KLuRESUP * ALut - KLuRESrelease * ALuRES;
double RBrb    = QBr *(CA - CVBr) - PABr * CVBr + (PABr * CBrt)/ PBr;
double RBrt    = PABr * CVBr - (PABr * CBrt)/ PBr;
double RMb      = QM*(CA-CVM) - PAM*CVM + (PAM*CMt)/PM;
double RMt      = PAM*CVM - (PAM*CMt)/PM - KMRESUP*AMt + KMRESrelease*AMRES;
double RMRES    = KMRESUP*AMt-KMRESrelease*AMRES;
double RRb      = QR*(CA-CVR) - PAR*CVR + (PAR*CRt)/PR;
double RRt      = PAR*CVR - (PAR*CRt)/PR - KRRESUP*ARt + KRRESrelease*ARRES;
double RRRES    = KRRESUP*ARt-KRRESrelease*ARRES;
double Rurine   = Kurine*CVK;
double RKb      = QK*(CA-CVK) - PAK*CVK + (PAK*CKt)/PK - Rurine;
double RKt      = PAK*CVK - (PAK*CKt)/PK - KKRESUP*AKt + KKRESrelease*AKRES;
double RKRES    = KKRESUP*AKt-KKRESrelease*AKRES;
double RSb      = QS*(CA-CVS) - PAS*CVS + (PAS*CSt)/PS;
double RSt      = PAS*CVS - (PAS*CSt)/PS - KSRESUP*ASt + KSRESrelease*ASRES;
double RSRES    = KSRESUP*ASt-KSRESrelease*ASRES;
double Rbile    = Kbile*CLt ;
double RLb      = QL*(CA-CVL) + QS*CVS - PAL*CVL + (PAL*CLt)/PL - KLRESUP*ALb + KLRESrelease*ALRES;
double RLt      = PAL*CVL - (PAL*CLt)/PL - Rbile;
double RLRES    = KLRESUP*ALb-KLRESrelease*ALRES;
double RTb      = QT*(CA-CVT) - PAT*CVT + (PAT*CTt)/PT;
double RTt      = PAT*CVT - (PAT*CTt)/PT - KTRESUP1*ATt + KTRESrelease*ATRES;
double RTRES    = KTRESUP1*ATt-KTRESrelease*ATRES;
double RTRESUP  = KTRESUP1*ATt;
double RTRESrel = KTRESrelease*ATRES;

dxdt_AA     = RA;
dxdt_AV     = RV;
dxdt_ALub   = RLub;
dxdt_ALut   = RLut;
dxdt_ALuRES = RLuRES;
dxdt_ABrb   = RBrb;
dxdt_ABrt   = RBrt;
dxdt_AMb    = RMb;
dxdt_AMt    = RMt;
dxdt_AMRES  = RMRES;
dxdt_ARb    = RRb;
dxdt_ARt    = RRt;
dxdt_ARRES  = RRRES;
dxdt_AKb    = RKb;
dxdt_AKt    = RKt;
dxdt_AKRES  = RKRES;
dxdt_Aurine = Rurine;
dxdt_Abile  = Rbile;
dxdt_ASb    = RSb;
dxdt_ASt    = RSt;
dxdt_ASRES  = RSRES;
dxdt_ALb    = RLb;
dxdt_ALt    = RLt;
dxdt_ALRES  = RLRES;
dxdt_Abile  = Rbile;
dxdt_ATb    = RTb;
dxdt_ATt         = RTt;
dxdt_ATRES       = RTRES;
dxdt_ATRESUP     = RTRESUP;
dxdt_ATRESrel    = RTRESrel;
dxdt_ADOSE       = 0;
dxdt_AUCTumor    = CTumor;

double Tmass = APlasma + ALiver + ABrain + AKidney + ALung + Arestall + AMuscle + ASpleen + Abile + Aurine + ATumor;
double Bal   = ADOSE-Tmass;

$TABLE
capture AUCT     = AUCTumor;
capture Tumor    = ATb+ATt+ATRES;
capture Lung     = CLung;
capture Liver    = CLiver;
capture Kidney   = CKidney;
capture Spleen   = CSpleen;
capture BAL      = Bal;
"

## Build mrgsolve-based PBPK Model
mod <- mcode_parse(NanoPBPK.code)
#mod <- mcode("NanoPBPK.code", NanoPBPK.code)

# Define the prediction function
pred.nano <- function(pars, pred=FALSE){
  
  # define the dosing parameters
  BW           = pars["BW"]/1000
  PDOSEiv      = pars["Dose"]
  TDOSE        = 1
  tinterval    = 24
  DOSEiv       = PDOSEiv * BW
  
  # define the exposure regimes
  ex.iv.1 <- ev( ID = 1, amt= DOSEiv,                ## Set up the exposure regimes
                 ii=tinterval, tinf = 0.005, addl=TDOSE-1, cmt="AV", replicate = FALSE)
  ex.iv.2 <- ev( ID = 1, amt= DOSEiv,                ## Set up the exposure regimes
                 ii=tinterval, tinf = 0.005, addl=TDOSE-1, cmt="ADOSE", replicate = FALSE)
  
  ex <- ex.iv.1 + ex.iv.2
  
  # define the time scales
  tsamp  = tgrid(0, tinterval*(TDOSE - 1) + 180, 0.1)
  
  # input parameters, exposure scenario and time into model
  out <- mod %>% param (pars) %>%
    update(atol = 1E-6, rtol = 1E-3, maxsteps = 50000) %>%
    mrgsim_d (data = ex, tgrid = tsamp)
  
  outdf = cbind.data.frame (Time    = out$time,
                            DETumor  = (out$Tumor/DOSEiv)*100)
  
  if(pred) return(outdf)
  
  outdf<-cbind.data.frame(
    DE24  = outdf %>% filter(Time == 24) %>% select(DE24 = DETumor),
    DE168 = outdf %>% filter(Time == 168) %>% select(DE168 = DETumor),
    DEmax = outdf %>% filter(DETumor == max(DETumor)) %>% select(DEmax = DETumor)
  )
  
  
  return(outdf)
}

parameters <- c(
  BW = 70,       # Body weight (kg)
  Dose = 1000    # Dose amount (ug)
)

result <- pred.nano(parameters)

# Print the result
print(result)
