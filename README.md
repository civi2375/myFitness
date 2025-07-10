# 健身鍛鍊應用程式

這是一個使用 React 18 和 RapidAPI 打造的現代健身鍛鍊應用程式，允許用戶選擇鍛鍊類別和肌肉群，瀏覽超過 1000 種鍛鍊項目，查看詳細資訊並從 YouTube 獲取相關影片。

## 專案概述

本專案展示如何使用 React 結合 RapidAPI 的鍛鍊資料庫和 YouTube 搜尋 API，構建一個功能豐富的健身應用程式。用戶可以透過直觀的介面篩選鍛鍊、查看詳細說明，並觀看相關的 YouTube 示範影片。

## 主要功能

- **美觀的用戶介面**：使用 Material-UI 打造響應式設計。
- **資料獲取**：從 RapidAPI 的鍛鍊資料庫和 YouTube API 獲取資料。
- **鍛鍊篩選**：支援按身體部位或器械篩選鍛鍊項目。
- **影片整合**：在鍛鍊詳情頁顯示相關的 YouTube 示範影片。
- **分頁功能**：實現鍛鍊列表分頁，提升用戶體驗。
- **響應式佈局**：使用 Flexbox 和 Stack 確保跨設備的良好顯示效果。

## 技術棧

- **前端**：React 18, Material-UI
- **API**：RapidAPI (ExerciseDB, YouTube Search)
- **狀態管理**：React Hooks (`useState`, `useEffect`)
- **部署**：Netlify 或 Vercel

## 安裝與使用

### 先決條件

- 安裝 Node.js（建議版本 16 或以上）
- 註冊 RapidAPI 帳戶並獲取 API 密鑰

### 安裝步驟

1. 克隆本專案：

   ```bash
   git clone https://github.com/<你的用戶名>/gym-exercises.git
   cd gym-exercises
   ```

2. 安裝依賴：

   ```bash
   npm install
   ```

3. 設置 API 密鑰：

   - 在 `src/utils/fetchData.js` 中配置 RapidAPI 的密鑰。

4. 啟動開發伺服器：

   ```bash
   npm start
   ```

### API 整合

- 使用 RapidAPI 的 ExerciseDB API 獲取鍛鍊資料。

- 使用 YouTube Search API 獲取相關影片。

- 示例請求：

  ```javascript
  fetch('https://exercisedb.p.rapidapi.com/exercises?limit=1500', {
    headers: { 'X-RapidAPI-Key': '<你的API密鑰>' }
  });
  ```

### 專案結構

- `src/components/Navbar.js`：應用導航欄
- `src/components/Home.js`：首頁，包含搜尋框和鍛鍊列表
- `src/components/ExerciseDetail.js`：鍛鍊詳情頁，顯示影片和相關鍛鍊
- `src/components/Footer.js`：頁腳，包含版權資訊
- `src/utils/fetchData.js`：處理 API 請求的工具函數

## 部署

1. 構建生產版本：

   ```bash
   npm run build
   ```

2. 部署到雲平台（如 Netlify 或 Vercel）：

   - 將 `build` 資料夾上傳至平台，或連結 GitHub 倉庫進行自動部署。

## 貢獻

歡迎提交 Issue 或 Pull Request！請確保遵循 Contributor Covenant 行為準則。

## 授權

本專案採用 MIT 授權，詳情見 LICENSE 檔案。

## 致謝

- RapidAPI 提供的 API 支援
- Material-UI 提供的 UI 組件庫