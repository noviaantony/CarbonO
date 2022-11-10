FROM openjdk:18
ARG JAR_FILE=target/user-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} user-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/user.jar"]
EXPOSE 8081