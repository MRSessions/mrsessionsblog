---
date: 2020-7-13
tag: 
  - .NET Core
  - dotnet core 3.1
  - dotnet core 2.2
  - migrate
  - dotnet
  - core
  - 3.1
  - 2.2
author: Matt Sessions
location: Greater Nashville Area, TN  
title: .NET Core 3.1 Migration Quick Tips
---

There are quite a few great articles that are out there that focus on migrating your .NET Core projects. Here, I want to focus on some super quick tips. This is going to be a small list based on my experiences. Some of these tips could even apply to future upgrades.

With the release of .NET Core 3.1 in November 2019, there are still some projects out there that are running .NET Core 2.2 or earlier. Over the last year, I have been working primarily on two projects. One is a side project, while the other is one that I work on in a full-time job and I have been tasked with migrating them both. I'm going to mainly focus on .NET Core 2.2 to 3.1 upgrade, and you can pretty much skip the 3.0. Which brings us to the first tip...

### You Can Skip Some Versions

If you follow along with the Microsoft documentation, you will see there is a section that goes from [2.2 to 3.0](https://docs.microsoft.com/en-us/aspnet/core/migration/22-to-30?view=aspnetcore-3.1&tabs=visual-studio) and then another for [3.0 to 3.1](https://docs.microsoft.com/en-us/aspnet/core/migration/30-to-31?view=aspnetcore-3.1&tabs=visual-studio). You do not have to do this, you can simply go from 2.2 to 3.1, there are very few small changes from 3.0 to 3.1. You may need to reference both of the articles though in some cases.

### Do Entity Framework Core Migration After Migrating .NET Core

Unless you will be migrating to a new .NET version that will not support your EF Core version, you don't need to immediately migrate until you finish with .NET. With the side project I work on, we didn't have much built out, and I was able to do both of these at the same time. In my full-time project, I had to migrate these separately due to EF Core requiring a lot of changes with some Linq statements, and we needed .NET updated for another project as well. Which brings another good point...

### Entity Framework Core and .NET Core Don't have to be the Same Version

They do need to be compatible, however. With the last statement I made, you can have .NET 3.1 and EF Core 2.2 running side-by-side, and as of right now, EF Core 5 Preview can work with .NET 3.1. This will help you decide what and how you want to migrate.

### Read the Microsoft Documentation and Find Good Articles

Microsoft has some good documentation that can be found [here](https://docs.microsoft.com/en-us/aspnet/core/migration/22-to-30?view=aspnetcore-3.1&tabs=visual-studio) that will help your migration. You can also find some great articles that will assist you in your .NET Core migration adventures.

* Scott Hanselman: [Updating an ASP.NET Core 2.2 Web Site to .NET Core 3.1 LTS](https://www.hanselman.com/blog/UpdatingAnASPNETCore22WebSiteToNETCore31LTS.aspx)
* Claudio Bernasconi: [How to migrate an ASP.NET MVC app from .NET Core 2.2 to .NET Core 3.1](https://www.claudiobernasconi.ch/2020/03/14/how-to-migrate-an-asp-net-mvc-app-from-dotnet-core-2-2-to-dotnet-core-3-1/)
* Alexandre Malavasi: [Migration from Asp.Net Core 2.2 to 3.1 -- Real project](https://medium.com/@alexandre.malavasi/migration-from-asp-net-core-2-2-to-3-1-real-project-ca382ea7eef7)

### Last Point: Search for Your Code Issues/Errors

If you aren't sure what to do with the errors that you may be getting after you migrate, chances are, someone else has had the issue. An example would be if you are using JSON, you will need to start using the NewtonsoftJson package.

#### If you have any other tips, leave them in the comments below.