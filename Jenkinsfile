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
                sh "docker-compose -f docker-compose-dev.yml down"
                sh "docker-compose -f docker-compose-dev.yml up --build -d"
            }
        }
    }
}