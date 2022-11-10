FROM openjdk:18
ARG JAR_FILE=target/carbonTracker-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} carbonTracker-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/carbontracker.jar"]
EXPOSE 8082