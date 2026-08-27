// ========================================
// BT STUDY HUB - BOOK LIBRARY
// Class 1 - 10
// ========================================

const books = [];

// Class 1 - 10 তৈরি
for (let classNumber = 1; classNumber <= 10; classNumber++) {

    books.push(
        {
            class: classNumber,
            subject: "বাংলা",
            title: `Class ${classNumber} - বাংলা`,
            pdf: "#"
        },
        {
            class: classNumber,
            subject: "English",
            title: `Class ${classNumber} - English`,
            pdf: "#"
        },
        {
            class: classNumber,
            subject: "গণিত",
            title: `Class ${classNumber} - গণিত`,
            pdf: "#"
        },
        {
            class: classNumber,
            subject: "বিজ্ঞান",
            title: `Class ${classNumber} - বিজ্ঞান`,
            pdf: "#"
        }
    );
}


// ========================================
// নতুন বই যোগ করার উদাহরণ
// ========================================

// books.push({
//     class: 5,
//     subject: "বাংলা",
//     title: "পঞ্চম শ্রেণির বাংলা বই",
//     pdf: "এখানে-বৈধ-PDF-লিংক"
// });
    books.push({
    class: 9,
    subject: "বাংলা ১ম পত্র",
    title: "Class 9-10 বাংলা সাহিত্য",
    pdf: "books/class9/Secondary%20(BV)-2026_Class%209-10_Bangla%20Sahitto_compressed.pdf"
});


// ========================================
// BOOK LIBRARY FUNCTION
// ========================================

function showBooks(classNumber = null, subject = null) {

    let result = books;

    if (classNumber !== null) {
        result = result.filter(
            book => book.class == classNumber
        );
    }

    if (subject !== null) {
        result = result.filter(
            book => book.subject === subject
        );
    }

    return result;
}


// ========================================
// SEARCH BOOK
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
// BOOK OPEN
// ========================================

function openBook(pdf) {

    if (!pdf || pdf === "#") {

        alert(
            "📚 এই বইটির PDF লিংক এখনো যোগ করা হয়নি।"
        );

        return;
    }

    window.open(pdf, "_blank");
}


// ========================================
// TOTAL BOOKS
// ========================================

console.log(
    "📚 BT Study Hub Books:",
    books.length
);
