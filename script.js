import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://ofzkmqbchlkdxnvwzkot.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9memttcWJjaGxrZHhudnd6a290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MTE3NTgsImV4cCI6MjAyNjM4Nzc1OH0.NE3vYwZDzbc3yVGl5XYf_suAmuHq_niIufzjge7LCcs'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.ISBN} </li>`;
}