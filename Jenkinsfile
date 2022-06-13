pipeline {
    agent any

        triggers {
            pollSCM('H * * * *')
        }

        tools {
            nodejs "Node"
        }

    stages{
        stage("Build Project") {
            parallel {
                stage ("Build Back End ") {
                    steps {
                        sh "docker-compose build nestjs_backend"
                    }
                }
            }
        }
        stage("Setup manual test env"){
            steps{
                sh "docker-compose --env-file environments/test-manual.env down"
                sh "docker-compose --env-file environments/test-manual.env up -d nestjs_backend"
            }
        }
    }
}