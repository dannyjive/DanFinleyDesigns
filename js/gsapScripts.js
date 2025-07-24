

    // <!-- GSAP Animation -->


      document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(SplitText);

        let split = SplitText.create(".stagger", {
          type: "chars",
          mask: "chars",
        });
        let splitTwo = SplitText.create(".staggerTwo", {
          type: "words",
          mask: "words",
        });

        gsap.from(split.chars, {
          duration: 0.2,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });

        gsap.from(splitTwo.words, {
          duration: 1.5,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });

        gsap.utils.toArray(".fade-in").forEach((el) => {
          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: 50,
            },
            {
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            }
          );
        });
      });
 

      