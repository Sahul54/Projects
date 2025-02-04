#include<bits/stdc++.h>
using namespace std;

void revStr(string &str){
    int i = 0;
    int j = str.length()-1;

    while (i<j)
    {
        swap(str[i], str[j]);
        i++;
        j--;
    }
    cout<<str;
}

int main(){
    string str = "hello";
    // reverse(str.begin(), str.end());
    
    revStr(str);

return 0;
}