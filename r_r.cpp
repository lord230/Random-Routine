// Online C++ compiler to run C++ program online
#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>

using namespace std;
int random(int val){
    return rand() % val;
}

int cls_ava(int val, int tch[]){
    while(true){
        int cls = random(val);
        if(tch[cls] == 0){
            return cls;
        }
    }
}

int main() {
    srand(time(0));
    
    int sec = 6;
    int cls = 6;
    int day = 5;
    string teacher[] = {"Math",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "History",
        "Computer Science",
        "Geography",
        "Art",
        "Music"};
        
        
        int val = sizeof(teacher)/sizeof(teacher[0]);
        
        string routine[sec][day][cls];
        int tch[val];
        for(int z =0 ; z < val ;z++){
                    tch[z] = 0;
                }
        
        for(int i = 0 ; i < sec ; i++){
            for(int j = 0 ; j < day;j++){
                for(int k = 0 ; k < sec ; k++){
                    int cl_n = cls_ava(val,tch);
                    
                    if(tch[cl_n] == 0){
                        tch[cl_n] = 1;
                    }else{
                    cout << "yes it did" << endl;

                        cl_n = cls_ava(val,tch);
                    }

                    routine[k][j][i] = teacher[cl_n];
                }
                for(int z =0 ; z < val ;z++){
                    tch[z] = 0;
                }
            }
        }
         for(int i = 0 ; i < sec ; i++){
            cout << "section" << i + 1 << endl;
            for(int j = 0 ; j < day;j++){
                for(int k = 0 ; k < sec ; k++){
                    cout << routine[i][j][k] << " ";
                }
                cout << endl;
                }
                cout << endl;}


    return 0;
}