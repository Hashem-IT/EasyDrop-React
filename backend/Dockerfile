# Basis-Image für Java
FROM openjdk:17-jdk-slim
WORKDIR /app

# Abhängigkeiten kopieren und bauen
COPY . .
RUN ./mvnw package -DskipTests

# Start des Spring Boot Servers
CMD ["java", "-jar", "target/backend-1.0.0.jar"]
