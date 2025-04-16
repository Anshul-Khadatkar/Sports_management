# Use the official lightweight JDK image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file into the container
COPY target/Participation-0.0.1-SNAPSHOT.jar /app/Participation.jar

# Expose the port your app runs on
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "Participation.jar"]
