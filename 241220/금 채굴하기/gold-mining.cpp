#include <iostream>
#include <algorithm>
using namespace std;

int mine(int** arr, int pre_income, int r, int c, int k, int n, int m) {
    // pre_income, income: # of gold
    int income=pre_income;
    if (k==0) income = arr[r][c];
    else {
        if (r-k >= 0) income += arr[r-k][c];
        if (r+k < n) income += arr[r+k][c];
        if (c-k >= 0) income += arr[r][c-k];
        if (c+k < m) income += arr[r][c+k];
    }
    return income, income - (k*k+(k+1)*(k+1));
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n, m, ans=-1, max_profit=-1;
    cin >> n >> m;

    int** arr = new int*[n];
    for (int i=0; i<n; i++) {
        arr[i] = new int[n];
        fill_n(arr[i], n, 0);
        for (int j=0; j<n; j++) 
            cin >> arr[i][j];
            
    }

    for (int i=0; i<n; i++) {
        for (int j=0; j<n; j++) {
            int income=0, profit;
            for (int k=0; k<n-1; k++) {
                income, profit = mine(arr, income, i, j, k, n, m);
                if (profit>max_profit) {
                    ans = income;
                    max_profit=profit;
                }
            }
        }
    }

    cout << ans;
    return 0;
}