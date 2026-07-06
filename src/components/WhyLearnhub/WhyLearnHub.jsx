import "./WhyLearnHub.css";

import {
    BookOpen,
    Search,
    Star,
    MonitorSmartphone,
    ArrowUpRight
} from "lucide-react";

function WhyLearnHub() {

    return (

        <section className="why">

            <h4>
                EVERYTHING YOU NEED
            </h4>

            <h2>
                Everything you need
                to start learning
                smarter.
            </h2>

            <p>
                Explore technology courses, discover new skills,
                search by category, and learn through a clean,
                modern and responsive learning platform.
            </p>

            <div className="why-grid">

                <div className="why-card">

                    <div className="icon">

                        <BookOpen />

                    </div>


                    <h3>
                        50+ Courses
                    </h3>

                    <p>
                        Browse courses across
                        web development,
                        Java, Python,
                        AI and more.
                    </p>
                    <div className="card-footer">

                        <ArrowUpRight size={18} />

                    </div>

                </div>

                <div className="why-card">

                    <div className="icon">

                        <Search />

                    </div>

                    <h3>
                        Smart Search
                    </h3>

                    <p>
                        Quickly find courses
                        using search
                        and categories.
                    </p>
                    <div className="card-footer">

                        <ArrowUpRight size={18} />

                    </div>

                </div>

                <div className="why-card">

                    <div className="icon">

                        <Star />

                    </div>

                    <h3>
                        Top Rated Courses
                    </h3>

                    <p>
                        Discover popular
                        courses loved
                        by learners.
                    </p>
                    <div className="card-footer">

                        <ArrowUpRight size={18} />

                    </div>

                </div>

                <div className="why-card">

                    <div className="icon">

                        <MonitorSmartphone />

                    </div>
                    <h3>
                        Responsive Learning
                    </h3>

                    <p>
                        Learn anytime
                        on desktop,
                        tablet or mobile.
                    </p>
                    <div className="card-footer">

                        <ArrowUpRight size={18} />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default WhyLearnHub;