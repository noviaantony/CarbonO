FROM openjdk:18
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} carbontracker.jar
ENTRYPOINT ["java","-jar","/carbontracker.jar"]
EXPOSE 8082