import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-git-details',
  templateUrl: './user-git-details.component.html',
  styleUrls: ['./user-git-details.component.css']
})
export class UserGitDetailsComponent implements OnInit {
  all_repos:any;
  commit_all_urls_data:any;
  user_name:string;
  chart: any;
  repo_name:any = [];
  comits_len:any = [];  
  constructor(private userservice:UserService) { }

  ngOnInit() {
    // this.userservice.getUser().then(response=>{      
    //   this.all_repos = response;   
    //   for(let repo of this.all_repos){ 
    //     this.user_name = repo.owner.login; //git user name
    //         this.repo_name.push(repo.name);                     
    //         this.userservice.getCommitUrl(repo.commits_url).then(commit_res=>{ 
    //             this.commit_all_urls_data= commit_res;
    //             this.comits_len.push((this.commit_all_urls_data).length); 
    //             //console.log(this.comits_len);
    //            this.displayChart();
    //      });
    //   }      
    // });
    
    
    this.userservice.getUser().then(response=>{      
      this.all_repos = response;
      for(let repo of this.all_repos){ 
        this.user_name = repo.owner.login; //git user name        
      }
      return this.all_repos;
    }).then(res=> res.map(el => {
      let {name , commits_url , ..._} = el;
      return {name , commits_url};
     })).then(res => { 
       let x = [];      
       Object.values(res).forEach(el => 
        {
          x.push(this.userservice.getCommitUrl(el['commits_url']));
          this.repo_name.push(el['name']);          
        })
       return Promise.all(x);
    }).then(res => res.map(el => {
      this.comits_len.push(el.length);
      this.displayChart(this.repo_name,this.comits_len);
    }));    
    }

  displayChart(name,commits){    
      this.chart = new Chart('canvas_bar', {
        type: 'bar',
        data: {
          labels: name,
          datasets: [
            { 
              data:  commits,
              backgroundColor:'rgba(255, 99, 132)',            
              borderColor: 'rgba(255, 99, 132)',
              borderWidth: 1,
              fill: true
            },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {         
            display: false,
                    },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
              beginAtZero: true 
              }
            }],
          },
          zoom: {
            enabled: false
        }
        }
      });                              
    

  }

}
