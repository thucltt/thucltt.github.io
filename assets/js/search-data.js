// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/demo_new_site/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/demo_new_site/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/demo_new_site/cv/";
          },
        },{id: "post-talking-with-students-at-the-nguyen-tat-thanh-institute-of-international-education",
        
          title: "Talking with Students at the Nguyen Tat Thanh Institute of International Education",
        
        description: "The Importance of Data structure and Algorithms in Computer programming",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/demo_new_site/blog/2023/talking-with-students-at-niie-2023/";
          
        },
      },{id: "post-using-blockchain-in-retrieval-system-student-accomplishments",
        
          title: "Using blockchain in retrieval system student accomplishments",
        
        description: "Blockchain and applications",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/demo_new_site/blog/2022/using-blockchain-in-retrieval-system-student-accomplishments/";
          
        },
      },{id: "post-coder-in-prevention-covid-19",
        
          title: "Coder in Prevention Covid-19",
        
        description: "Make something meaningful!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/demo_new_site/blog/2022/coder-in-prevention-covid-19/";
          
        },
      },{id: "post-thinking-about-metaverse-from-a-newbie-39-s-perspective",
        
          title: "Thinking about Metaverse from a Newbie&#39;s perspective",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/demo_new_site/blog/2021/thinking-about-metaverse/";
          
        },
      },{id: "post-thank-you",
        
          title: "Thank You!",
        
        description: "Can Tho - 2020",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/demo_new_site/blog/2021/cantho-2020-code/";
          
        },
      },{id: "post-bài-viết-đầu-tiên-của-tôi",
        
          title: "Bài viết đầu tiên của tôi",
        
        description: "Những gì sẽ có trong trang Blog của mình",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/demo_new_site/blog/2020/first-post/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/demo_new_site/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/demo_new_site/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/demo_new_site/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/demo_new_site/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/demo_new_site/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%74%61%63%74@%74%68%75%63%6C%74%74.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lucasle123", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/thucltt", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/LucasLe456", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/demo_new_site/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
