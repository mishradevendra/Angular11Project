import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

const getByJoinDate='http://localhost:7777/api/v1/userjoindate';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:7777/api/v1/users";
  constructor(private httpClient: HttpClient) { }
  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`)
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getUserByFirstName(firstName: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${firstName}`);
  }
  getUserByJoinDate() {
    return this.httpClient.get(getByJoinDate);
  }

}
