FROM python:3.11.0-slim
LABEL authors="Boris"

WORKDIR /backend

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .


EXPOSE 8000