- Trước khi tạo 1 nhánh phải kiểm tra xem đang đứng ở nhánh nào
- git branch <tên_branch> => tạo nhánh
- git checkout <tên_branch(nhánh)> => chuyển sang nhánh
- git checkout -b <tên_branch> => Vừa tạo nhánh & vừa chuyển nhánh
- NOTE: Luôn tạo nhánh mới trước khi mình thực hiện 1 lệnh coppy từ internet
- Object là đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc 1 hằng số 
- Trong object có thể khai báo nhiều kiểu dữ liệu khác nhau
- Mảng (Array) lưu danh sách các phần tử  

# Git & Javascript basic
## Outline
### Git
- Undo actions
- Branching model
### Javascript basic
- Logical operator
- Object and array
- Function

1. Git
1.1
- Xem lịch sử commit:  *git log*
- Thay đổi commit message 

**Cách 1**
  *git commit --amend*
  *Gõ i => vào chế độ insert*
  *Sửa nội dung commit theo ý bạn*
  *Gõ esc để thoát insert*
  *Gõ ":wq" => write & quit*

**Cách 2**
*git commit --amend -m "Nội dung commit mới"*

**Lưu ý**
**git commit --amend chỉ sửa commit cuối cùng (latest commit).**
**Nếu bạn đã push lên GitHub/GitLab, cần thêm --force khi push lại: git push --force**

1.2. Đưa từ vùng staging về vùng working directory: git restore --staged <file>
- Đưa từ vùng repository( đã commit) về working directory (chưa commit) => tức là bỏ commit gần nhất và quay lại trạng thái trước khi commit

- Quay lại trạng thái trước commit: git reset --soft HEAD~1 
  *--soft: giữ lại thay đổi trong staging area (đã git add) → có thể sửa message hoặc thêm file rồi commit lại.*
  *HEAD~1: quay lại commit trước đó (tức là bỏ commit mới nhất).*

  - Quay về working directory (Giống chưa add): git reset --mixed HEAD~1 hoặc git reset HEAD~1 (undo 1 commit)
  *--mixed: bỏ commit và bỏ cả khỏi staging (về lại working directory như vừa sửa file).*
  *Tức là: file vẫn còn thay đổi, nhưng chưa git add.*

  - Hoàn toàn trở về trước commit: git reset --hard HEAD~1
  *Cẩn thận: lệnh này xóa luôn thay đổi trong file. Không khôi phục lại được nếu chưa backup.*
  
1.3 Nhánh
**Tạo 1 nhánh mới: git branch <ten_branch>**
**Chuyển sang 1 nhánh khác(branch): git checkout <ten_branch>**
**Tạo nhánh mới & chuyển sang nhánh mới đó ngay lập tức: git checkout -b <ten_branch>**

1.4 .gitignore file
- Dùng để bỏ các file không cần Git theo dõi
*Bỏ theo dõi file bất kì: Ignore file =>  <file_name>*
*Bỏ theo dõi folder bất kì: Ignore folder => <folder-name>/*