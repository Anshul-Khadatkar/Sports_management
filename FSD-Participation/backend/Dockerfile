# Use the official lightweight JDK image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper and POM
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./

# Download dependencies (this layer will be cached unless pom.xml changes)
RUN ./mvnw dependency:go-offline -B

# Copy the project source
COPY src/ src/

# Build the application
RUN ./mvnw package -DskipTests

# Use a clean base image for the final image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=0 /app/target/Participation-0.0.1-SNAPSHOT.jar /app/Participation.jar

# Environment variables
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://dpg-cvqc1ore5dus73f6ncc0-a.oregon-postgres.render.com:5432/fsdproject_9hsk
ENV SPRING_DATASOURCE_USERNAME=fsdproject_9hsk_user
ENV SPRING_DATASOURCE_PASSWORD=c14NMNajHfYVbvOAl3nRee01PyK5svrB
ENV SPRING_PROFILES_ACTIVE=prod

# Expose the port
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "Participation.jar"]
