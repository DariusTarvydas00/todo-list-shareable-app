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
                sh "docker build --build-arg NODE_ENV=production --target=production -t app:1.00 ."
                //sh "docker-compose build --target development nestjs"
                // docker compose build/up/down
            }
        }
        stage("Unit Test"){
            parallel{
                stage("Unit test backend"){
                    steps{
                        sh "make build-test nestjs"
                    }
                }
            }
        }
    }
}