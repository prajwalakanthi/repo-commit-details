import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {  
  constructor(private http:HttpClient) { }

  getUser(){
    let url = "https://api.github.com/users/prajwalakanthi/repos";
    return this.http.get(url).toPromise();
  }

 getCommitUrl(commit_url){  
    return this.http.get(commit_url.replace('{/sha}', '')).toPromise();
  }
}
