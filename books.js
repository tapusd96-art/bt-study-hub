// ========================================
// BT STUDY HUB - ONLINE BOOK LIBRARY
// ========================================

const books = [

    // ==============================
    // CLASS 1
    // ==============================

    {
        class: 1,
        subject: "বাংলা",
        title: "Class 1 - আমার বাংলা বই",
        pdf: "https://nctb.gov.bd/pages/static-pages/695b9adec4774958d7b708cd"
    },

    {
        class: 1,
        subject: "English",
        title: "Class 1 - English for Today",
        pdf: "https://nctb.gov.bd/pages/static-pages/695b9adec4774958d7b708cd"
    },

    {
        class: 1,
        subject: "গণিত",
        title: "Class 1 - প্রাথমিক গণিত",
        pdf: "https://nctb.gov.bd/pages/static-pages/695b9adec4774958d7b708cd"
    },


    // ==============================
    // CLASS 2
    // ==============================

    {
        class: 2,
        subject: "বাংলা",
        title: "Class 2 - আমার বাংলা বই",
        pdf: "https://nctb.gov.bd/pages/static-pages/695b9935c4774958d7b70508"
    },

    {
        class: 2,
        subject: "English",
        title: "Class 2 - English for Today",
        pdf: "https://nctb.gov.bd/pages/static-pages/695b9935c4774958d7b70508"
    },

    {
        class: 2,
        subject: "গণিত",
        title: "Class 2 - প্রাথমিক গণিত",
        pdf: "https://nctb.gov.bd/pages/static-pages/695b9935c4774958d7b70508"
    },


    // ==============================
    // CLASS 9
    // ==============================

    {
        class: 9,
        subject: "বাংলা ১ম পত্র",
        title: "Class 9-10 বাংলা সাহিত্য",
        pdf: "https://nctb.gov.bd/pages/static-pages/695b9935c4774958d7b70508"
    }

];


// ========================================
// OPEN ONLINE BOOK
// ========================================

function openBook(url) {

    if (!url || url === "#") {

        alert("📚 এই বইটির অনলাইন লিংক এখনো যোগ করা হয়নি।");

        return;
    }

    window.open(url, "_blank");
}


// ========================================
// SEARCH BOOKS
// ========================================

function searchBooks(keyword) {

    keyword = keyword.toLowerCase().trim();

    return books.filter(book =>

        book.title.toLowerCase().includes(keyword) ||

        book.subject.toLowerCase().includes(keyword) ||

        String(book.class).includes(keyword)

    );
}


// ========================================
// FILTER BOOKS
// ========================================

function filterBooks(classNumber, subject) {

    return books.filter(book => {

        const classMatch =
            !classNumber ||
            String(book.class) === String(classNumber);

        const subjectMatch =
            !subject ||
            book.subject === subject;

        return classMatch && subjectMatch;

    });

}


// ========================================
// TOTAL BOOKS
// ========================================

console.log(
    "📚 BT Study Hub Online Books:",
    books.length
);
