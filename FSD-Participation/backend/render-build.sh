#!/usr/bin/env bash
# Exit on error
set -e

# Build with Maven
./mvnw clean package -DskipTests

# Print final message
echo "Build completed successfully!" 