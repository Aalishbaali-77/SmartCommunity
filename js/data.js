
// =============================================
//  Smart Community - Pre-loaded Mock Data
//  Loads only once on first visit
// =============================================

function loadMockData() {
  // Don't reload if data already exists
  if (localStorage.getItem('mockLoaded') === 'true') return;

  // ── RESIDENTS ──────────────────────────────
  const residents = [
    { id: 1, fullName: 'Alishba Ali',    email: 'alishba@community.com',  phone: '03001234567', flatNo: 'A-101', block: 'A', role: 'admin',    password: 'admin123',    registeredAt: '01/06/2026' },
    { id: 2, fullName: 'Ahmed Raza',     email: 'ahmed@community.com',    phone: '03111234567', flatNo: 'B-202', block: 'B', role: 'resident', password: 'pass123',     registeredAt: '02/06/2026' },
    { id: 3, fullName: 'Sara Khan',      email: 'sara@community.com',     phone: '03211234567', flatNo: 'A-103', block: 'A', role: 'resident', password: 'pass123',     registeredAt: '02/06/2026' },
    { id: 4, fullName: 'Usman Tariq',    email: 'usman@community.com',    phone: '03331234567', flatNo: 'C-301', block: 'C', role: 'resident', password: 'pass123',     registeredAt: '03/06/2026' },
    { id: 5, fullName: 'Fatima Malik',   email: 'fatima@community.com',   phone: '03451234567', flatNo: 'D-401', block: 'D', role: 'resident', password: 'pass123',     registeredAt: '03/06/2026' },
    { id: 6, fullName: 'Bilal Sheikh',   email: 'bilal@community.com',    phone: '03021234567', flatNo: 'B-205', block: 'B', role: 'resident', password: 'pass123',     registeredAt: '04/06/2026' },
  ];

  // ── ANNOUNCEMENTS ──────────────────────────
  const announcements = [
    { id: 1, title: 'Water Supply Interruption',      body: 'Water supply will be off on June 7th from 9AM to 1PM for maintenance work.',             author: 'Admin', date: '05/06/2026', badge: 'warning'  },
    { id: 2, title: 'Monthly Community Meeting',      body: 'All residents are invited to attend the monthly meeting on June 10th at 6PM in the hall.', author: 'Admin', date: '04/06/2026', badge: 'primary'  },
    { id: 3, title: 'Generator Maintenance',          body: 'Backup generator will be tested on June 8th. Expect brief power fluctuations.',           author: 'Admin', date: '03/06/2026', badge: 'info'     },
    { id: 4, title: 'New Parking Rules Effective',    body: 'Please follow the new parking allocation. Violating vehicles will be towed.',             author: 'Admin', date: '01/06/2026', badge: 'danger'   },
    { id: 5, title: 'Welcome New Residents',          body: 'Please welcome our new residents in Block D. Community BBQ on June 12th.',                author: 'Admin', date: '30/05/2026', badge: 'success'  },
  ];

  // ── COMPLAINTS ─────────────────────────────
  const complaints = [
    { id: 1, residentName: 'Ahmed Raza',   flatNo: 'B-202', category: 'Maintenance', subject: 'Broken elevator in Block B',         detail: 'The elevator has been out of order for 3 days.',           status: 'Pending',     date: '04/06/2026' },
    { id: 2, residentName: 'Sara Khan',    flatNo: 'A-103', category: 'Noise',       subject: 'Loud music at night',                detail: 'Neighbour plays loud music after midnight.',               status: 'In Progress', date: '03/06/2026' },
    { id: 3, residentName: 'Usman Tariq',  flatNo: 'C-301', category: 'Cleanliness', subject: 'Garbage not collected in Block C',   detail: 'Garbage has not been picked up for 2 days.',               status: 'Resolved',    date: '02/06/2026' },
    { id: 4, residentName: 'Fatima Malik', flatNo: 'D-401', category: 'Security',    subject: 'Main gate left open at night',       detail: 'Security guard leaves the main gate open after 11PM.',    status: 'Pending',     date: '01/06/2026' },
    { id: 5, residentName: 'Bilal Sheikh', flatNo: 'B-205', category: 'Maintenance', subject: 'Water leakage in corridor',          detail: 'There is a water pipe leakage near the B block corridor.', status: 'In Progress', date: '31/05/2026' },
  ];

  // ── SAVE TO LOCALSTORAGE ───────────────────
  localStorage.setItem('residents',     JSON.stringify(residents));
  localStorage.setItem('announcements', JSON.stringify(announcements));
  localStorage.setItem('complaints',    JSON.stringify(complaints));
  localStorage.setItem('mockLoaded',    'true');

  console.log('✅ Mock data loaded successfully!');
}

loadMockData();