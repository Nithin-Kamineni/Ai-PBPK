# start from the rocker/r-ver:4.2.3 image
FROM rocker/r-ver:4.2.3

# install the linux libraries needed for plumber
RUN apt-get update -qq && apt-get install -y \
  libssl-dev \
  libcurl4-gnutls-dev

# install plumber
RUN R -e "install.packages('plumber')"
RUN R -e "install.packages('here')"
RUN R -e "install.packages('rstudioapi')"
RUN R -e "install.packages('mrgsolve')"
RUN R -e "install.packages('dplyr')"
RUN R -e "install.packages('zoo')"
RUN R -e "install.packages('ggplot2')"
RUN R -e "install.packages('patchwork')"
RUN R -e "install.packages('FME')"
RUN R -e "install.packages('tidyr')"
RUN R -e "install.packages('Metrics')"

# copy everything from the current directory into the container
COPY / /

# open port 9000 to traffic
EXPOSE 9000

# when the container starts, start the main.R script
ENTRYPOINT ["Rscript", "runapi.R"]

#docker rmi nanoplastics-rserver:1.0.0 --force
#docker-compose build
#docker run -p 9000:9000 nanoplastics-rserver:1.0.0