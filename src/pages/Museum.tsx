import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Museum = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [ticketCount, setTicketCount] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    category: '',
    visitors: ''
  });

  const exhibits = [
    { id: 1, title: 'Viking Ship Hall', image: 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=800' },
    { id: 2, title: 'Kronborg Castle', image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800' },
    { id: 3, title: 'Maritime Museum', image: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=800' },
    { id: 4, title: 'Danish Architecture', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800' },
    { id: 5, title: 'Historical Artifacts', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800' }
  ];

  const categories = ['General Admission', 'Student', 'Senior', 'Family Pass', 'Group Tour'];

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <div style={{
        background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
        padding: '20px',
        animation: 'colorChange 3s infinite'
      }}>
        <div onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>
          <h1 style={{
            fontSize: '72px',
            color: '#ffff00',
            textShadow: '3px 3px #ff00ff, 6px 6px #00ffff',
            fontFamily: 'Comic Sans MS',
            textAlign: 'center',
            animation: 'bounce 2s infinite'
          }}>
            HELSINGOR MUSEUM DENMARK
          </h1>
        </div>
        <img src="https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=1200" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </div>

      <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#ff00ff', fontSize: '48px', fontFamily: 'Impact' }}>Featured Exhibits</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: false }}
            autoplay={{ delay: 2000 }}
            effect="fade"
            style={{ height: '500px' }}
          >
            {exhibits.map((exhibit) => (
              <SwiperSlide key={exhibit.id}>
                <div style={{ position: 'relative', height: '100%' }}>
                  <div style={{ backgroundImage: `url(${exhibit.image})`, backgroundSize: 'cover', height: '100%' }}>
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      backgroundColor: 'rgba(255,0,0,0.7)',
                      padding: '10px',
                      fontSize: '32px',
                      color: 'yellow'
                    }}>
                      {exhibit.title}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          <div style={{ flex: 1, backgroundColor: '#ffccff', padding: '20px', border: '5px dashed #ff00ff' }}>
            <div style={{ fontSize: '36px', color: '#0000ff', marginBottom: '15px' }}>About The Museum</div>
            <div style={{ fontSize: '14px', lineHeight: '1.2' }}>
              <i>The Helsingor Museum is located in the beautiful coastal town of Helsingor, Denmark.
              Known for its rich maritime history and cultural heritage, the museum showcases
              artifacts from Viking times to modern Danish culture. Click here to learn more!</i>
            </div>
            <div onClick={() => alert('More info!')} style={{
              marginTop: '15px',
              backgroundColor: '#00ff00',
              color: '#ff0000',
              padding: '10px',
              textAlign: 'center',
              cursor: 'pointer',
              fontSize: '24px'
            }}>
              CLICK FOR MORE INFO
            </div>
          </div>

          <div style={{ flex: 1, backgroundColor: '#ccffcc', padding: '20px', border: '5px dotted #00ff00' }}>
            <div style={{ fontSize: '36px', color: '#ff0000', marginBottom: '15px' }}>Opening Hours</div>
            <div style={{ fontSize: '16px' }}>
              Monday to Friday: 10:00 - 18:00<br/>
              Saturday: 10:00 - 20:00<br/>
              Sunday: 12:00 - 16:00<br/>
              <span style={{ fontSize: '12px', color: '#666' }}>Closed on holidays</span>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffcc', padding: '30px', marginBottom: '40px', border: '3px solid #ffff00' }}>
          <h2 style={{ color: '#ff0000', fontSize: '42px' }}>Book Your Tickets</h2>

          <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '10px', color: '#666' }}>name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid red',
                  backgroundColor: '#ffeeee'
                }}
                placeholder="Type your name"
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid blue',
                  backgroundColor: '#eeeeff'
                }}
                placeholder="email address"
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <div style={{ flex: 1 }}>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid green'
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid purple',
                    color: formData.time ? '#000' : '#999'
                  }}
                >
                  <option value="">Pick a time</option>
                  <option value="10:00">10:00</option>
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{ fontSize: '18px', color: '#0000ff', marginBottom: '10px' }}>Select Category:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setFormData({...formData, category: cat});
                    }}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: selectedCategory === cat ? '#ff00ff' : '#cccccc',
                      color: selectedCategory === cat ? '#ffff00' : '#000000',
                      cursor: 'pointer',
                      border: '2px solid',
                      borderColor: ['red', 'blue', 'green', 'orange', 'purple'][idx],
                      fontSize: ['12px', '16px', '20px', '14px', '18px'][idx]
                    }}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{ fontSize: '14px', marginBottom: '5px' }}>Number of tickets:</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ff0000',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '24px'
                  }}
                >
                  -
                </div>
                <div style={{ fontSize: '24px', minWidth: '40px', textAlign: 'center' }}>
                  {ticketCount}
                </div>
                <div
                  onClick={() => setTicketCount(ticketCount + 1)}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#00ff00',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '24px'
                  }}
                >
                  +
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <select
                value={formData.visitors}
                onChange={(e) => setFormData({...formData, visitors: e.target.value})}
                style={{
                  width: '300px',
                  padding: '8px',
                  border: '3px double #ff00ff'
                }}
              >
                <option>Select visitor type</option>
                <option>Adult</option>
                <option>Child</option>
                <option>Student</option>
                <option>Senior</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <div
                onClick={() => setShowModal(true)}
                style={{
                  padding: '15px 30px',
                  backgroundColor: '#ff00ff',
                  color: '#ffff00',
                  cursor: 'pointer',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  border: '5px outset #ff00ff',
                  boxShadow: '5px 5px 10px rgba(0,0,0,0.5)'
                }}
              >
                SUBMIT BOOKING
              </div>
              <div
                onClick={() => {
                  setFormData({
                    name: '',
                    email: '',
                    date: '',
                    time: '',
                    category: '',
                    visitors: ''
                  });
                  setSelectedCategory('');
                  setTicketCount(1);
                }}
                style={{
                  padding: '15px 30px',
                  backgroundColor: '#00ffff',
                  color: '#ff0000',
                  cursor: 'pointer',
                  fontSize: '18px'
                }}
              >
                Reset
              </div>
            </div>
          </form>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '38px', color: '#00ff00', textDecoration: 'underline' }}>Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {[
              'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400',
              'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=400',
              'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400',
              'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=400',
              'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
              'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400',
              'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400'
            ].map((imgUrl, item) => (
              <div
                key={item}
                onClick={() => alert(`Image ${item + 1} clicked!`)}
                style={{
                  cursor: 'pointer',
                  transform: `rotate(${item % 2 === 0 ? 2 : -2}deg)`,
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(0deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${item % 2 === 0 ? 2 : -2}deg)`}
              >
                <div style={{
                  backgroundImage: `url(${imgUrl})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  border: `${item % 4 + 2}px solid`,
                  borderColor: ['red', 'blue', 'green', 'yellow'][item % 4]
                }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{
          backgroundColor: '#ffcccc',
          padding: '20px',
          marginBottom: '40px',
          border: '5px ridge #ff0000'
        }}>
          <h3 style={{ fontSize: '32px', color: '#0000ff' }}>Special Events</h3>
          <div style={{ display: 'flex', gap: '15px', overflowX: 'scroll', padding: '10px' }}>
            {['Viking Festival', 'Night at Museum', 'Art Workshop', 'Historical Tour', 'Kids Day'].map((event, idx) => (
              <div
                key={idx}
                onClick={() => alert(`Event: ${event}`)}
                style={{
                  minWidth: '250px',
                  height: '150px',
                  backgroundColor: ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff'][idx],
                  padding: '15px',
                  cursor: 'pointer',
                  border: '3px solid #000',
                  fontSize: '18px'
                }}
              >
                <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{event}</div>
                <div style={{ fontSize: '12px' }}>Click to learn more about this exciting event!</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#e0e0e0', padding: '20px' }}>
          <h4 style={{ fontSize: '28px', color: '#ff00ff' }}>Newsletter Signup</h4>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="your email here..."
              style={{
                flex: 1,
                padding: '12px',
                border: '2px dashed #ff00ff',
                fontSize: '16px'
              }}
            />
            <div
              onClick={() => alert('Subscribed!')}
              style={{
                padding: '12px 24px',
                backgroundColor: '#00ff00',
                color: '#ff0000',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
            >
              SUBSCRIBE NOW!!!
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '10px',
              maxWidth: '500px',
              border: '5px solid #ff00ff',
              animation: 'shake 0.5s infinite'
            }}
          >
            <h3 style={{ fontSize: '32px', color: '#ff0000' }}>Booking Confirmed!</h3>
            <div style={{ fontSize: '18px', marginTop: '15px' }}>
              Thank you for booking! Your tickets will be sent to your email.
            </div>
            <div
              onClick={() => setShowModal(false)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#00ff00',
                color: '#0000ff',
                cursor: 'pointer',
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
            >
              OK
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes colorChange {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(180deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default Museum;
