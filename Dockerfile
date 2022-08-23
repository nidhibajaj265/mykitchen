FROM openjdk:8-jdk-alpine
WORKDIR ./
COPY ./build/libs/myKitchen-0.0.1-SNAPSHOT.jar masalakitchen.jar
ENTRYPOINT ["java", "-Xms1024m", "-Xms526m", "-jar", "masalakitchen.jar"]
