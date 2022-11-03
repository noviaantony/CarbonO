FROM openjdk:18
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} userreward.jar
ENTRYPOINT ["java","-jar","/userreward.jar"]
EXPOSE 8083