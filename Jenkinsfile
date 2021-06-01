pipeline {
    agent any
    stages {
        stage('Deploy/build application') {
            steps {
               sh '''
                echo 'Application deployed successfully!'
               '''
            }
        }
        stage('Frontend tests') {
            steps {
               sh '''
                cd frontend-tests/
                npm install
                npm run cypress:frontend
               '''
               archiveArtifacts allowEmptyArchive: true, artifacts: 'frontend-tests/cypress/videos/**', followSymlinks: false
               publishHTML([
                   allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'frontend-tests/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Frontend testresult', 
                    reportTitles: ''])
            }
        }
        stage('Backend tests') {
            steps {
               sh '''
                cd backend-tests/
                npm install
                npm run cypress:backend
               '''
               publishHTML([
                   allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'backend-tests/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Backend testresult', 
                    reportTitles: ''])
            }
        }
        stage('Performance tests') {
            steps {
               sh '''
                cd performance-tests/
                rm test1.csv -Rf && rm html-reports/ -Rf
                jmeter -n -t login-logout.jmx -l test1.csv -e -o html-reports/
               '''
               publishHTML([
                   allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'performance-tests/html-reports', 
                    reportFiles: 'index.html', 
                    reportName: 'Performance testresult', 
                    reportTitles: ''])
            }
        }
        
    }

}