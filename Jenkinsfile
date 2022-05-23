pipeline {
    agent any

        triggers {
            pollSCM('* * * * *')
        }

        tools {
            nodejs "Node"
        }

    stages{
        stage("Build project") {
            parallel {
                stage("Build back-end") {
                    when {
                        anyOf {
                            changeset "todo-list-shareable-backend/src/*"
                        }
                        steps {
                            echo "asd"
                        }
                    }
                    //when {
                        //anyOf {
                            //dir("todo-list-shareable-backend"){
                              //  changeset "src/*"
                               // changeset "test/*"
                            //}
                          //  echo "asd"
                       // }
                       // steps {
                       // echo "afsdagfsdfg"
                            //sh "docker-compose build nestjs_backend"
                       // }
                   // }
                }
            }
        }
        stage("Run") {
            steps{
                sh "docker-compose up -d"
            }
        }
    }
}