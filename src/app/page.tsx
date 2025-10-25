"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, Sparkles, Star, Award, Heart, Building, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "Events", id: "events" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          brandName="Grand Haven Hotel"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Beyond Expectations"
          description="Discover unparalleled comfort and sophisticated elegance at Grand Haven Hotel, where every detail is crafted for your perfect stay."
          tag="Luxury Hotel"
          tagIcon={Crown}
          buttons={[
            { text: "Book Your Stay", href: "https://booking.com" },
            { text: "Explore Amenities", href: "amenities" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardThree
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities designed to elevate your stay"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind with our award-winning spa treatments and state-of-the-art wellness center",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel spa and wellness center"
            },
            {
              id: "02",
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our world-renowned chefs in an elegant dining atmosphere",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant with fine dining"
            },
            {
              id: "03",
              title: "Infinity Pool & Terrace",
              description: "Unwind in our stunning infinity pool with panoramic city views and premium poolside service",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel infinity pool with city views"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Hear from travelers who experienced the Grand Haven difference"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              company: "Fortune 500",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Travel Blogger",
              company: "Wanderlust Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Rodriguez"
            },
            {
              id: "3",
              name: "Emily Chen",
              role: "Wedding Planner",
              company: "Elite Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Chen"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Corporate Director",
              company: "Global Industries",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Thompson"
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to hospitality excellence reflected in every statistic"
          tag="Awards"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "happy guests",
              description: "Satisfied visitors from around the world",
              icon: Users
            },
            {
              id: "2",
              value: "98%",
              title: "satisfaction rate",
              description: "Guest satisfaction based on reviews",
              icon: Star
            },
            {
              id: "3",
              value: "25",
              title: "awards won",
              description: "International hospitality excellence awards",
              icon: Award
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Dedicated professionals committed to your exceptional experience"
          tag="Our People"
          tagIcon={Heart}
          members={[
            {
              id: "1",
              name: "Alexandra Davis",
              role: "General Manager",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alexandra Davis, General Manager"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Head Concierge",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marcus Johnson, Head Concierge"
            },
            {
              id: "3",
              name: "Isabella Romano",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Romano, Executive Chef"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Hospitality Brands"
          description="Part of a distinguished network of luxury hotels worldwide"
          tag="Partners"
          tagIcon={Building}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Contact our reservations team to create a memorable experience tailored just for you."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: false },
            { name: "checkout", type: "date", placeholder: "Check-out Date", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Send Inquiry"
          imageSrc="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel reception desk and lobby area"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Haven Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "Events", href: "events" },
                { label: "Weddings", href: "weddings" },
                { label: "Business Center", href: "business" },
                { label: "Concierge", href: "concierge" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}