# login-system
# 簡易登入系統（含密碼強度檢測）

## 專案說明
本專案實作一個簡單的登入系統，並結合密碼強度檢測功能。
使用者可輸入帳號與密碼進行驗證，系統會判斷登入是否成功，
並評估密碼強度（weak / medium / strong）。

## 功能
- 登入驗證（帳號與密碼）
- 密碼強度檢測
  - 長度是否大於 8
  - 是否包含數字
  - 是否包含特殊字元

## 使用技術
- JavaScript（Node.js）
- node:test（內建測試工具）
- GitHub

## 測試
本專案使用 node:test 與 assert 進行單元測試，包含：
- 登入成功測試
- 登入失敗測試
- 密碼強度（strong）測試
- 密碼強度（weak）測試


## 專案結構
- login.js：登入功能
- password.js：密碼強度檢測
- test.js：測試案例