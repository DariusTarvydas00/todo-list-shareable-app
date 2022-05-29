pipeline{
    agent any

    triggers{
        pollSCM('*/15 * * * *')
    }

    stages{
        stage("Build project") {
            parallel {
                stage("Build Backend"){
                    steps{
                        dir("todo-list-shareable-backend"){
                            sh "docker build ."
                        }
                    }
                }
                stage('Build Frontend') {
                    steps {
                        dir("todo-list-shareable-frontend"){
                        echo "1"
                           // sh "npm install"
                           // sh "npm run build"
                        }
                    }
                }
            }
        }
        /*stage("Unit test"){
            steps{
                dir("backend"){
                    sh "npm run test:cov --passWithNoTests"
                    clover(cloverReportDir: 'coverage', cloverReportFileName: 'clover.xml',
                        // optional, default is: method=70, conditional=80, statement=80
                        healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
                        // optional, default is none
                        unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
                        // optional, default is none
                        failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
                    )
                }
            }
        }*/
        stage("Clean containers") {
            steps {
                script {
                echo "1"
                 //    sh "docker-compose --env-file config/Test.env down"
                }
            }
        }
        stage("Deploy containers") {
            steps {
            echo "1"
             //   sh "docker-compose --env-file config/Test.env up -d health-web health-api influxdb grafana"
            }
        }

        stage('Smoke Test') {
            steps {
            echo "1"
              //  sh 'docker-compose --env-file config/Test.env run k6 run /scripts/smoke-test.js'
            }
        }

        stage("Push to registry") {
            steps {
            echo "1"
                //sh "docker-compose --env-file config/Test.env push"
            }
        }
    }
//    post {
//        always {
//            discordSend description: 'Jenkins Pipeline Build', footer: 'Footer Text', link: env.BUILD_URL, result: currentBuild.currentResult, unstable: false, title: JOB_NAME, webhookURL:env.DISCORD_WEBHOOK
//            step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/coverage.cobertura.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false])
//        }
//    }
}