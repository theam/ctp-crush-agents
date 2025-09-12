SCRUM-42: Establish Spring Boot Microservice Structure

How to build locally:
- Requires Java 17 and Maven 3.8+
- Build: mvn -B -ntp clean package
- Run: mvn spring-boot:run
- Health: GET http://localhost:8080/api/health -> OK
