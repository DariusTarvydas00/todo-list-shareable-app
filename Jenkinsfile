pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    tools {
        nodejs "Node"
    }

    stages {
        stage("Build project"){
            steps {
                sh "docker-compose down"
                sh "docker-compose up --build -d"
                // docker compose build/up/down
            }
        }
    }
}