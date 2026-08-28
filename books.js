// ========================================
// BT STUDY HUB
// PROFESSIONAL ONLINE BOOK LIBRARY
// ========================================

const books = [

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

    {
        class: 9,
        subject: "বাংলা ১ম পত্র",
        title: "Class 9-10 বাংলা সাহিত্য",
        pdf: "https://nctb.gov.bd/pages/static-pages/695b9935c4774958d7b70508"
    }

];


// ========================================
// BOOK OPEN
// ========================================

function openBook(url) {

    if (!url || url === "#") {
        alert("📚 এই বইটির লিংক এখনো যোগ করা হয়নি।");
        return;
    }

    window.open(url, "_blank");
}


// ========================================
// SEARCH
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
// FILTER
// ========================================

function filterBooks(classNumber = "all", subject = "all") {

    return books.filter(book => {

        const classMatch =
            classNumber === "all" ||
            String(book.class) === String(classNumber);

        const subjectMatch =
            subject === "all" ||
            book.subject === subject;

        return classMatch && subjectMatch;

    });

}


// ========================================
// BOOK COUNT
// ========================================

console.log(
    "📚 BT Study Hub Online Books:",
    books.length
);
