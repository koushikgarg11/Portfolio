import streamlit as st

st.set_page_config(page_title="Contact | Koushik Garg", page_icon="📬", layout="wide")

st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap');
html, body, [class*="css"] { font-family: 'DM Sans', sans-serif; }
.section-header { font-family: 'DM Serif Display', serif; font-size: 1.8rem; color: #0F2744; border-bottom: 2px solid #1D9E75; padding-bottom: 0.4rem; margin-bottom: 1.2rem; }
.contact-card { background: #0F2744; border-radius: 12px; padding: 1.5rem; color: white; text-align: center; }
.contact-icon { font-size: 2rem; }
.contact-label { color: #9FE1CB; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; margin: 0.5rem 0 0.2rem; }
.contact-value { color: #5DCAA5; font-weight: 600; font-size: 0.95rem; }
.stButton > button { background-color: #1D9E75 !important; color: white !important; border: none !important; border-radius: 8px !important; font-weight: 500 !important; }
</style>
""", unsafe_allow_html=True)

st.markdown("# 📬 Get In Touch")
st.caption("Open to Data Analyst roles, freelance projects, and collaborations.")
st.divider()

# Contact cards
c1, c2, c3, c4 = st.columns(4)
contacts = [
    ("📧", "Email", "koushikgarg11@gmail.com"),
    ("📞", "Phone", "+91-7428668469"),
    ("🔗", "LinkedIn", "koushik-garg-b034442a9"),
    ("💻", "GitHub", "koushikgarg11"),
]
for col, (icon, label, value) in zip([c1, c2, c3, c4], contacts):
    with col:
        st.markdown(f"""
        <div class="contact-card">
            <div class="contact-icon">{icon}</div>
            <div class="contact-label">{label}</div>
            <div class="contact-value">{value}</div>
        </div>
        """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)
st.markdown("**🔗 Direct Links**")
link_col1, link_col2 = st.columns(2)
with link_col1:
    st.link_button("🔗 View LinkedIn Profile", "https://linkedin.com/in/koushik-garg-b034442a9")
with link_col2:
    st.link_button("💻 View GitHub Profile", "https://github.com/koushikgarg11")

st.divider()

# Message form
st.markdown('<p class="section-header">Send a Message</p>', unsafe_allow_html=True)
st.caption("This form uses Streamlit — you can connect it to EmailJS or Formspree for real email delivery.")

with st.form("contact_form"):
    name = st.text_input("Your Name")
    email = st.text_input("Your Email")
    subject = st.selectbox("Subject", [
        "Job Opportunity", "Freelance Project", "Collaboration", "General Inquiry"
    ])
    message = st.text_area("Message", height=150, placeholder="Tell me about your project or opportunity...")
    submitted = st.form_submit_button("Send Message")

    if submitted:
        if name and email and message:
            st.success(f"✅ Thanks {name}! Your message has been received. I'll get back to you at {email} soon.")
            st.balloons()
        else:
            st.error("Please fill in all fields before sending.")

st.divider()
st.markdown("""
<div style="text-align:center; padding:1rem; color:#888; font-size:0.85rem;">
    Built with ❤️ using <strong>Streamlit</strong> & <strong>Plotly</strong> · Deployed on Streamlit Community Cloud
    <br><strong>Koushik Garg</strong> · Data Analyst · Delhi, India · 2025
</div>
""", unsafe_allow_html=True)
