#include <iostream>
#include <algorithm>
using namespace std;

int getMax_tri_block(int** arr, int r, int c, int n, int m) {
    int max = 0, temp;
    if (r < n-1 && c < m-1) {
        temp = arr[r][c]+arr[r+1][c+1];
        temp += arr[r+1][c]>arr[r][c+1]?arr[r+1][c]:arr[r][c+1];
        if (temp > max) max = temp;

        temp = arr[r+1][c]+arr[r+1][c];
        temp += arr[r][c]>arr[r+1][c+1]?arr[r][c]:arr[r+1][c+1];
        if (temp > max) max = temp;
    }
    return max
}

int getMax_long_block(int** arr, int r, int c, int n, int m) {
    int max = 0, temp;
    // 가로로 긴
    if (r < n && c <= m-3) {
        temp = arr[r][c]+arr[r][c+1]+arr[r][c+2];
        if (temp > max) max = temp;
    }
    // 세로로 긴
    else if (r <= n-3 && c < m) {
        temp = arr[r][c]+arr[r+1][c]+arr[r+1][c+1];
        if (temp > max) max = temp;
    }
    return max
}

int main() {
    int n, m, ans=-1;
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
            int temp = max(getMax_long_block(arr, i, j, n, m), getMax_tri_block(arr, i, j, n, m))
            if (temp > ans) ans = temp;
        }
    }

    cout << ans;
    return 0;
}