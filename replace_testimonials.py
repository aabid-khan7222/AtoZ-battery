from pathlib import Path

reviews = [
    {"text": "Doorstep installation done within 30 minutes. The team explained maintenance tips patiently. Highly recommended!", "name": "Rahul Patil", "meta": "Honda City Owner", "badge": "Premium Plan", "rating": 5},
    {"text": "They helped me pick the right inverter battery for my shop and even handled the old battery recycling.", "name": "Sneha Kulkarni", "meta": "Retail Store Owner", "badge": "Since 2021", "rating": 4.5},
    {"text": "Night-time emergency jump start sorted in under an hour. Genuine Exide support you can rely on.", "name": "Manoj Deshmukh", "meta": "Fleet Manager", "badge": "24×7 Plan", "rating": 5},
    {"text": "Booked at 8am and by 8:40 the battery was replaced at my doorstep. Transparent pricing, zero surprises.", "name": "Pooja Mahajan", "meta": "Entrepreneur", "badge": "Express Service", "rating": 5},
    {"text": "Our logistics vans run non-stop. Their periodic health checks keep downtime near zero.", "name": "Aditya Joshi", "meta": "Logistics Supervisor", "badge": "AMC Customer", "rating": 5},
    {"text": "Recommended a perfect inverter battery combo for my studio. Clean installation and tidy wiring.", "name": "Kavita Naik", "meta": "Architect", "badge": "Design Partner", "rating": 5},
    {"text": "Battery swap for my delivery bike was wrapped up during lunch break. Paperwork and payment all digital.", "name": "Saurabh Rane", "meta": "Delivery Partner", "badge": "Fleet Verified", "rating": 5},
    {"text": "Their technician explained how to maintain the inverter bank for long events. Backup lasted exactly as promised.", "name": "Neha Deshpande", "meta": "Event Planner", "badge": "Elite Support", "rating": 4.5},
    {"text": "They supplied rugged tractor batteries for our Jalgaon farms and scheduled reminders for warranty checks.", "name": "Ganesh Pawar", "meta": "Farm Equipment Dealer", "badge": "Rural Partner", "rating": 5},
    {"text": "I run a boutique and can’t afford downtime. Their AMC keeps both inverter and UPS running smooth.", "name": "Trupti Borse", "meta": "Boutique Owner", "badge": "Maintenance Plan", "rating": 5},
    {"text": "Bulk order for our taxi fleet was delivered with serial tracking and warranty cards sorted by vehicle number.", "name": "Vikram Sawant", "meta": "Travel Agency Owner", "badge": "Fleet Partner", "rating": 5},
    {"text": "School buses and generator batteries serviced in one visit. Students never faced power issues during exams.", "name": "Ashwini Chavan", "meta": "School Administrator", "badge": "Institution Plan", "rating": 4.5},
    {"text": "Appreciated the WhatsApp updates with technician live location. Seamless from booking to completion.", "name": "Rohit Shewale", "meta": "IT Consultant", "badge": "Digital First", "rating": 5},
    {"text": "Café freezers, music system, CCTV — all on one inverter bank now. Install team cleaned up the entire cabling.", "name": "Anuja Bhandari", "meta": "Cafe Owner", "badge": "Pro Install", "rating": 4.5},
    {"text": "They helped recycle our old truck batteries responsibly and even offered buy-back credits.", "name": "Nilesh Gawande", "meta": "Transport Fleet Owner", "badge": "Eco Verified", "rating": 5},
    {"text": "Emergency jump start reached my clinic in 25 minutes. Saved a full day of appointments.", "name": "Dr. Priya Jagtap", "meta": "Physician", "badge": "24×7 Support", "rating": 5},
    {"text": "Ride-share battery packages with EMI option were a big relief. They remind me before each service.", "name": "Omkar Kale", "meta": "Ride Share Driver", "badge": "Easy EMI", "rating": 4.5},
    {"text": "Solar + battery setup commissioned in a single day. Performance reports shared monthly without fail.", "name": "Farhan Shaikh", "meta": "Solar Installer", "badge": "Energy Partner", "rating": 5},
]

def build_rating_icons(rating):
    full = int(rating)
    icons = ['                                <i class=\"fas fa-star\"></i>' for _ in range(full)]
    if rating - full >= 0.5:
        icons.append('                                <i class=\"fas fa-star-half-alt\"></i>')
    return "\n".join(icons)

cards = []
for review in reviews:
    rating_html = build_rating_icons(review['rating'])
    text_html = f"&ldquo;{review['text']}&rdquo;"
    card = f"""                        <article class=\"testimonial-card\">
                            <div class=\"testimonial-rating\">
{rating_html}
                                <span class=\"verified-label\"><i class=\"fas fa-shield-check\"></i> Verified</span>
                            </div>
                            <p class=\"testimonial-text\">{text_html}</p>
                            <div class=\"testimonial-author\">
                                <div>
                                    <p class=\"author-name\">{review['name']}</p>
                                    <p class=\"author-meta\">{review['meta']}</p>
                                </div>
                                <span class=\"author-badge\">{review['badge']}</span>
                            </div>
                        </article>"""
    cards.append(card)

cards_html = "\n".join(cards)

new_section = f"""    <!-- Testimonials Section -->
    <section class=\"testimonials\">
        <div class=\"container\">
            <div class=\"testimonials-header\">
                <h2 class=\"section-title\">Loved by Jalgaon Drivers</h2>
                <p>Real stories from customers who trust us for reliable power and swift service.</p>
                <div class=\"testimonials-meta\">
                    <span class=\"verified-chip\"><i class=\"fas fa-user-check\"></i> Verified Customers</span>
                    <span class=\"reviews-count\"><i class=\"fas fa-comment-dots\"></i> 18 Detailed Reviews</span>
                </div>
            </div>
            <div class=\"testimonials-carousel\">
                <button class=\"testimonial-nav testimonial-nav--prev\" type=\"button\" aria-label=\"Previous review\">
                    <i class=\"fas fa-chevron-left\"></i>
                </button>
                <div class=\"testimonials-slider\" id=\"testimonialsSlider\">
                    <div class=\"testimonials-track\">
{cards_html}
                    </div>
                </div>
                <button class=\"testimonial-nav testimonial-nav--next\" type=\"button\" aria-label=\"Next review\">
                    <i class=\"fas fa-chevron-right\"></i>
                </button>
            </div>
        </div>
    </section>
"""

path = Path('index.html')
text = path.read_text(encoding='utf-8')
start = text.index('    <!-- Testimonials Section -->')
end = text.index('    <!-- Contact Section -->')
path.write_text(text[:start] + new_section + text[end:], encoding='utf-8')
