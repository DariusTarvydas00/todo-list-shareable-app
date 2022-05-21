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
                sh "make build-dev"
                sh "make start"
                //sh "docker-compose build --target development nestjs"
                // docker compose build/up/down
            }
        }
        stage("Unit Test"){
            parallel{
                stage("Unit test backend"){
                    steps{
                        echo 'asd'
                    }
                }
            }
        }
    }
}