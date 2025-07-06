# QA Agent Task – Vaibhav Gautam

This project is an AI-powered QA automation agent for Recruter.ai that performs the following:

- 📹 Understands core user flows from the Recruter.ai "How-to" video
- 🧲 Generates Playwright test cases from video-based steps
- 🛠️ Automates frontend testing with Playwright
- 📊 Produces HTML reports with screenshots & logs

---

## ✅ Features

- Automated test case generation (JSON + Markdown)
- Playwright test execution
- Smart element selectors and form interaction
- HTML test report with failure screenshots
- Headed browser support for visual feedback

---

## 📁 Project Structure

```
qa-agent/
│
├── tests/
│   └── signup.spec.ts          # Test script for "Request Demo" form
│
├── playwright.config.ts        # Config for HTML reporter + screenshots
├── testcases.json              # Test cases in JSON
├── testcases.md                # Test cases in Markdown
├── README.md                   # This file
```

---

## ▶️ How to Run

### 1. Install Dependencies

Make sure [Node.js](https://nodejs.org) is installed.

```bash (CMD Command)
npm install
npx playwright install
```

### 2. Run Tests (headed)

```bash (CMD Command)
npx playwright test tests/signup.spec.ts --headed
```

### 3. View HTML Report

```bash (CMD Command)
npx playwright show-report
```

---

## 📄 Sample Test Case

```json
{
  "id": "TC-001",
  "title": "Submit Request Demo form successfully",
  "steps": [
    "Go to homepage",
    "Click 'Request Demo'",
    "Fill in all fields with valid data",
    "Click 'Submit Request'"
  ],
  "expected": "Form submitted successfully and confirmation shown",
  "tags": ["core", "form", "demo"]
}
```

---

## 📟 Demo Video

A screen-recorded demo walkthrough is included with:

- Test case explanation
- Script execution
- Report display

---

## 👨‍💻 Developed By

**Vaibhav Gautam**\
LinkedIn: www.linkedin.com/in/vaibhav-gautam-8b3ab71a9
Email: gautamvaibhav020@gmail.com

