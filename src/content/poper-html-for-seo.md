---
layout: post
title: 'Proper Use Of HTML For SEO'
author: [Ankit]
tags: ['SEO']
image: img/html-seo.png
date: '2020-07-17T23:46:37.121Z'
draft: false
excerpt: Every site owner wants to rank high on Google but they only focus on off page methods. On page SEO is equally important so is writing HTML properly.
---

Now SEO is very important for website owners like us, we do a lot of hard work to create content and we do desire to have a good reachability. Over years Google has become the largest search engine and it contributes to large number of traffic to every site. SEO optimization is very important if we wish to rank well on searched terms on Google.

Personally, I do not like inorganic ways like link building to improve my SEO score, but I do all I can in an organic way. Well that includes writing your HTML is best possible way. Always remember, this is secondary, writing high quality content is primary.

## **Benefits:**

- Better Visibility
- Improved Traffic
- Increase in Revenue
- Higher Conversion
- Google Loves You

Now let us start with the steps with write the best SEO friendly HTML.

## **Title Tag**

What’s a man without a name and what’s a webpage without a title? Title tag is very important for a webpage, it is the tag which gives brief about the page content. One must always add title properly and refrain from using terms like homepage, blog, and others. Try to be descriptive using minimal words.

```
<!-- ❌ Poor description using title -->
<title>Homepage</title><title>Blog</title>
            
<!-- ✅ Proper description using title -->
<title>Devxify - Level Up Yor Web Skills</title><title>Web Developemt Guides and Articles by Devxify</title>
```

## **Use Of Rel Canonical & Icon**

These two might sound like small bits but they are very important. The rel canonical states the original link of the webpage. Here is an example, for example you webpage is accessible by multiple URLs like:

- https://www.devxify.com
- https://www.devxify.com/
- https://www.devxify.com#home

But we only want the first to be indexed on Google, this is where we use rel=‘canonical’, it also helps us with reducing the chances of internal content duplicity.

```
<link rel="canonical" href="https://www.devxify.com">
```

Similarly, rel=‘icon’ is also very important, it hold the destination of your favicon which is nothing but a small brand icon which in show in browser window. This help users remember your site even by the icon. Who does not want to build a brand after all?

```
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## **Proper Use Of Meta Tags**

I believe that meta tags are the most important tags when giving basic description of your site to any search engine. Meta tags contain wide array of data like site title, description, social image, social title, and social description.

Meta tags even make your site look the way you wish on web results and social media sites. Below are few essential meta tags one must have, if you are a bit lazy then you use any generator like [metatags.io↗](https://metatags.io/) and your job will be done.

```
<!-- Basic Meta Tags -->
<meta name="title" content="Awesome Title Here"><meta name="description" content="Awesome Description Here"><!-- Facebook Meta Tags -->
<meta property="og:url" content="https://www.devxify.com"><meta property="og:logo" content="images/brand-logo.png"><meta property="og:type" content="website"><meta property="og:title" content="Awesome Title Here"><meta property="og:description" content="Awesome Description Here"><meta property="og:image" content="images/brand-social-image.png"><!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Awesome Title Here"><meta name="twitter:description" content="Awesome Description Here"><meta name="twitter:image" content="images/brand-social-image.png"><!-- Chrome Theme (URL Bar Color) -->
<meta name="theme-color" content="#1a62f2" />
```

## **Use Of Schema Markup**

[Schema Markup↗](https://neilpatel.com/blog/get-started-using-schema/) has a similar job compared to meta tags but it is in much descriptive way. You can go as deep as you wish like sharing details about product, pricing and much more. I will share a very basic example, but you are free to visit the official Schema documentation for in-depth study and implementation. Below is an example of schema of our homepage.

```
<script type='application/ld+json'>
    {
            "@context": "http://www.schema.org",
            "@type": "WebSite",
            "name": "Devxify",
            "alternateName": "Devxify.com",
            "description": "Helping you be a pro in web development, want to?",
            "image": "http://www.devxify.com/images/logo.jpg",
            "url": "https://www.devxify.com",
            "creator": {
                "@type": "Person",
                "name": "Ankit Ghosh",
                "email": "hi@devxify.com"
            }
    }
</script>
```

## **Semantic Use Of Heading Tags**

I have seen plenty of website owners mess up here. Most of the time search engine bots interpret even non-semantic HTML but you do not need to pay extra tax to write proper HTML? So why not do it in the correct way? Here is an example of wrong and correct uses of heading tags.

```
<!-- ❌ Page should have single H1 tag -->
<h1>Heading 1</h1><h2>Heading 2</h2><h2>Heading 2</h2><h1>Heading 1</h1><!-- ❌ Heading should be structured -->
<!-- Like H3 cannot be placed under H2 -->
<h1>Heading 1</h1><h2>Heading 2</h2><h2>Heading 2</h2><h3>Heading 3</h3><h2>Heading 2</h2><!-- ✅ Structured heading tags with hiearchy -->            
<h1>Heading 1</h1><h2>Heading 2</h2><section><h3>Heading 3</h3></section><h2>Heading 2</h2>
```

## **Use of Alt Attribute in Images**

Not all people are physically privileged like us, some people use screen reader and won’t be able to see the images you add so to tell them about the image we need to add a small text to describe the image.

```
<!-- ❌ Alt attribute not used -->
<img src="/funny-cat.png">
               
<!-- ✅ Alt attribute used -->
<img src="/funny-cat.png" alt="funny cat">
```

## **Friendly URLs**

So, whenever you write and are about to publish it, ensure that you write well formatted URL. I share the correct and incorrect example below, have a look.

```
<!-- ❌ Poor sub-directory naming -->
https://example.com/29-07-2020/abc-book-review.html
<!-- ✅ Proper sub directory naming -->
https://example.com/book-review/abc.html

<!-- ❌ Poor naming &lack of desc -->
https://example.com/holiday.html                                   
<!-- ✅ Proper naming with desc -->       
https://example.com/how-i-spent-my-holiday.html               
                
```

## **Valid Robots.txt File**

Robots.txt is essential file which is used be bots to see what all pages are allowed by them to crawl and index. There are small chances that you might mess up and block them from crawling and indexing of your pages. Here is a sample of a valid `robots.txt`, you can simply copy this and add for your use

```
<!-- ❌ Blocks Every Path (This is a comment & not part of Robots.txt) -->              
User-Agent: *
Disallow: /
Allow: /index.html
Sitemap: https://example.com/sitemap.xml                

<!-- ✅ Allows Every Path Except Admin & Dashboard (This is a comment & not part of Robots.txt) --> 
User-Agent: *
Disallow: /admin.html
Disallow: /dashboard.html
Allow: /
Sitemap: https://example.com/sitemap.xml
                
```

For better understanding check the code below which has been written with proper comments. Also when copying from below remember to remove comments from your `robots.txt` as it does not support comments, I added to make you understand in a easy way.

```
<!-- Allow full access -->
User-agent: *
Disallow:
               
<!-- Block all access -->
User-agent: *
Disallow: /

<!-- Blocks a folder -->             
User-agent: *
Disallow: /folder/
        
<!-- Block a file -->       
User-agent: *
Disallow: /demo.html
                
```

## **Descriptive Link Tags**

This is a very common issue I found among bloggers, I found that they tend to use terms like here, go, buy, and add links to them. The problem is they are meaningless. Always add links to text which have a meaning. See below to understand more.

```
<!-- ❌ Link with non descriptive text -->
<a href="/funny-cat.png">more</a>
               
<!-- ✅ Link with descriptive text -->
<a href="/funny-cat.png">more funny cat pic</a>
```

## **Conclusion**

These were some extremely basic guidelines one must follow for better HTML and SEO, though their are much more but these basics are important too. If you are already followwing these then koudos to you.

If you really likes the article the do share it with your friends and colleagues. If you find a error or just want to do addition to this post then feel free to drop a message on [Twitter↗](https://twitter.com/devxify), also do follow us for quick updates. For weekly updates on web performance and optimization do subscribe to our newsletter. If you wish to support my work (which I do here for free) then you can do so by [buying me a coffee↗](https://www.buymeacoffee.com/Devxify) or two, I'll be thankful.

<p style="text-align:center">
<a href="https://www.buymeacoffee.com/Devxify" rel="noreferrer nofollow" target="_blank"><img alt="buy me a coffee" src="https://devstorage.b-cdn.net/bmc.svg"></a>
</p>