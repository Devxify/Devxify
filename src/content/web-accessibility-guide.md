---
layout: post
title: 'Web Accessibility Guide'
author: [Ankit]
tags: ['WEB']
image: img/web-acc.png
date: '2020-07-17T23:46:37.121Z'
draft: false
excerpt: In today's era everyone deserves to have access to the web. Being a developer, one must know the guidelines to create easily accessible webpages.
---

Hey, I'm Ankit a lover of "Accessible & Fast Web". Have you ever thought that how blessed we are to be **normal**?
If not, then you better start. 

As a part of the web developer community it's our job to ensure that the web is accessible to all. The W3 even has a separate guideline for  [web content accessibility↗](https://www.w3.org/WAI/standards-guidelines/wcag/#:~:text=WCAG%202.0%20and%20WCAG%202.1%20are%20stable%2C%20referenceable%20technical%20standards,A%2C%20AA%2C%20and%20AAA.). After all the web should be a better place to be even if the world isn't.

![Web Accessibility](https://dev-to-uploads.s3.amazonaws.com/i/8l5ycmba8i0kfgsf1t4w.png)

Today let's talk about the basics and let's see if I can help you be at-least semi-compliant with WCAG 2.1. In this article I would be guiding you through the steps to make you webpage accessible with devices like screen reader. Let's begin.

<a href="https://www.devxify.com/go/sponsor" rel="nofollow sponsored" target="_blank">![Ads on Devxify](img/sponsor-1.png)</a>

## **Pages Must Have Proper Title**

This the most basic tip you will ever read or listen regarding web accessibility. Having a proper title ensure that the specially abled visitor gets a quick info of what the page is about. I request you to use terms like **page 1**, **blog**. It's horrible, instead use phrases like **Continuation of Abc article** or **Dev.to Blog, One stop for all developers**.

```html
<!-- ❌ Homepage? Does that even have proper meaning? -->
<title>Homepage</title>
               
<!-- ✅ Descriptive -->
<title>Devxify - Level Up Your Web Development Skills</tile>
``` 
Though its easy to understand but still there are few things to remember when writing a title.

1. Must be descriptive
2. Must not be used to fool visitors
3. Title should be unique from page to page

## **Proper Labelling of Elements**

Not all of your visitors would be reading your text, some might be using tools like screen reader. As a developer you must ensure that all of the required elements are marked properly for screen readers. Labelling ensures that your visitor is given information in a way you want. Coming back to topic, labelling and giving role can be easily done using `aria-label`, `aria-labelledby`, `role`  and others.

```html
<!-- Example 1: The role tells that it's is a separator for section/page -->
<span class="has-text-centered is-size-4 has-text-grey-light" role="separator">• • •</span>

<!-- Example 2: Aria Label tells page reader about external page -->
<p>Hie I am <a target="_blank" href="https://twitter.com/devxify" aria-label="Devxify Website">Devxify</a>, wbu</p>

<!-- Example 3: Telling Screen Reader About Navigation -->
<nav role="navigation">

</nav>
```

## **Links Must Have Descriptive Name**

Whenever using an anchor tag to add links to your website, remember that the linked text should give a brief hint of the following linked page. Don’t use texts like more, go, see to link to other pages/articles on or outside your site. It is bad.

```html
<!-- ❌ Link with non descriptive text -->
<a href="/funny-cat.png">more</a>
               
<!-- ✅ Link with descriptive text -->
<a href="/funny-cat.png">more funny cat pic</a>
``` 
## **Semantic Use of Heading**

Headings partly define the structure of the webpage. When you mess up with it then you mess up with your content structure too. Heading tags should always be using according to their hierarchy and a page must contain only a single H1 tag, below is an example of correct and wrong use of heading structure.

```html
<!-- ❌ Page should have single H1 tag -->
<h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h2>Heading 2</h2>
<h1>Heading 1</h1>

<!-- ❌ Heading should be structured -->
<!-- Like H3 cannot be placed under H2 -->
<h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    <h2>Heading 2</h2> 

<!-- ✅ Structured heading tags with hierarchy -->            
<h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <section>
        <h3>Heading 3</h3>
    </section>
    <h2>Heading 2</h2> 
```
## **Making Font Size Readable**

Does your webpage have proper [font size↗](https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html)? You might have written an awesome blog or guide but is that of any use when people can’t even read that?

There is a suggested size of min 11px for text on page but that might not be the number you should stick too. As a webmaster you should know your audience, are your audience elderly people or people with poor eyesight? If that’s the case, then you better have a higher number than said 11px.

Apart from sticking with px as a unit for your font-size, try dynamic units like rem and em which change font-size according to the viewport.

## **Elaborating Text In HTML**

Sometime use short forms of text which aren't known by everybody like BBC (British Broadcasting Channel? Confusion). For this we have abbreviation tags at our service.

```html
The <abbr title="British Broadcasting Corporation">BBC</abbr> is a great platform.
```
## **Semantic Use of HTML Tags**

HTML has few tags which visually do the same thing but are actually different and very few developers know this.

For example, `<strong>` and `<b>` tag visually do the same thing which is making text bold. Semantically they are different, `<strong>` tag is to bold the text and also mark this as important part of the text whereas `<b>` tag is just a visual element to show text in bold format.

```html
<strong> I am really important</strong>

<b>I am just a bold text</b>
```
This also means that you need to use the correct tags for the correct purpose. For example, buttons must be enclosed between `<button>` tag and not `<a>` tag. Similarly, on-page functions like onClick JavaScript functions should use `<button>` and not `<a>`.

```html
<!-- ✅ Using Button tag for buttons -->
<button>Click Me</button>

<!-- ❌ Using Anchor Tag for buttons is semantically wrong -->
<a>Click Me</a>

<!-- ✅ Using Button tag for JS function -->
<button onClick="demo()">Click Me</button>

<!-- ❌ Using Anchor Tag for for same is wrong -->
<a onClick="demo()">Click Me</a>
```

## **Conclusion**

Did you like what I wrote? Feel free to share your views in the comment section. Also if you wish to check how much accessible your website is then the best tools would be **Google LightHouse** and **Accessibe's Ace**. These tools will provide you with a comprehensive list of tests your webpage passed and one's failed.

If you really liked the article then do share it with your friends and colleagues. If you find a error or just want to do addition to this post then feel free to drop a message on [Twitter↗](https://twitter.com/devxify), also do follow us for quick updates. For weekly updates on web performance and optimization do subscribe to our newsletter. If you wish to support my work (which I do here for free) then you can do so by [buying me a coffee↗](https://www.buymeacoffee.com/Devxify) or two, I'll be thankful.

<p style="text-align:center">
<a href="https://www.buymeacoffee.com/Devxify" rel="noreferrer nofollow" target="_blank"><img alt="buy me a coffee" src="https://devstorage.b-cdn.net/bmc.svg"></a>
</p>
<!--Comments System-->
<script src="https://utteranc.es/client.js" data-repo="Devxify/devxify-comment" data-issue-term="pathname" data-theme="github-light" crossorigin="anonymous" async>
</script>
