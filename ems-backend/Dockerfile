# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the jar file into the container
COPY target/ems-0.0.1-SNAPSHOT.jar /app/ems-0.0.1-SNAPSHOT.jar

# Expose port 8080
EXPOSE 8080

# Command to run the jar
ENTRYPOINT ["java", "-jar", "ems-0.0.1-SNAPSHOT.jar"]
