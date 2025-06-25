# EmailJS Setup Instructions

Your contact form is now configured with EmailJS! Follow these simple steps to make it fully functional:

## 📧 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## ⚙️ Step 2: Setup Email Service

1. **Login to EmailJS Dashboard**
2. **Go to "Email Services"** tab
3. **Click "Add New Service"**
4. **Choose your email provider:**
   - **Gmail** (recommended for personal)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Or any SMTP service**
5. **Follow the connection wizard**
6. **Copy your SERVICE_ID** (you'll need this)

## 📝 Step 3: Create Email Template

1. **Go to "Email Templates"** tab
2. **Click "Create New Template"**
3. **Use this template content:**

```
Subject: New Portfolio Contact: {{subject}}

Hello Brandon,

You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Save the template**
5. **Copy your TEMPLATE_ID** (you'll need this)

## 🔑 Step 4: Get Public Key

1. **Go to "Account"** tab
2. **Copy your PUBLIC_KEY** from the API Keys section

## 💻 Step 5: Update Your Code

**Edit `/src/components/Contact.tsx`** and replace these lines:

```typescript
// Replace these with your actual EmailJS values:
const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';     // From Step 2
const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // From Step 3  
const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // From Step 4
```

**Example:**
```typescript
const EMAIL_SERVICE_ID = 'service_abc123';
const EMAIL_TEMPLATE_ID = 'template_xyz789';
const EMAIL_PUBLIC_KEY = 'user_def456';
```

## 🚀 Step 6: Test Your Contact Form

1. **Save your changes**
2. **Run `npm start`**
3. **Go to the Contact section**
4. **Fill out and submit the form**
5. **Check your email inbox!**

## 🔒 Security Notes

- ✅ **Safe for GitHub Pages** - no secrets exposed
- ✅ **Domain restrictions** - set allowed domains in EmailJS dashboard
- ✅ **Rate limiting** - EmailJS prevents spam automatically
- ✅ **Free tier** - 200 emails/month (perfect for portfolio)

## 🎯 Free Tier Limits

- **200 emails/month**
- **50 emails/day**
- **Perfect for personal portfolio**

## 🆘 Troubleshooting

**Form not working?**
1. Check browser console for errors
2. Verify all 3 IDs are correct
3. Make sure email service is connected
4. Test template in EmailJS dashboard

**Not receiving emails?**
1. Check spam folder
2. Verify email service connection
3. Test with different email address

## 🌟 That's It!

Your contact form will now send emails directly to your inbox! 🎉

**Total setup time: ~5 minutes**