# AAU Mock Exam Questions and Answers (1-89)

## Question 1 (Page 1)
**What is the purpose of the box-sizing property in CSS?**
- a. To apply a shadow and margin to the box
- b. To define the size of the total content and margin box
- c. To set the total margin of the box
- d. To include padding and border in the element's total size

**Answer:** d. To include padding and border in the element's total size

**Explanation:**
- **a is incorrect:** Shadows are applied with `box-shadow` and margins with `margin`.
- **b is incorrect:** `box-sizing` never includes the margin inside the element's width/height calculation.
- **c is incorrect:** The total margin is set using the `margin` property.
- **d is correct:** Using `box-sizing: border-box` tells the browser to account for any border and padding in the values you specify for an element's width and height.

## Question 2 (Page 2)
**In COCOMO model, Initial estimate Ei=____________**
- a. b(KLOC)a
- b. b*(KLOC)*a
- c. a(KLOC)b
- d. a*(KLOC)*b

**Answer:** c. a(KLOC)b

**Explanation:**
- **a is incorrect:** The base multiplier is 'a' and the exponent is 'b', not the other way around.
- **b is incorrect:** The relationship involves an exponent, not just simple multiplication.
- **c is correct:** The basic COCOMO formula for computing effort is E = a * (KLOC)^b.
- **d is incorrect:** 'b' must be an exponent, not a multiplier.

## Question 3 (Page 3)
**Sara is a database manager. Sara is allowed to add new users to the database, remove current users, and create new usage functions for the users. Sara is not allowed to read the data in the fields of the database itself. This is an example of:**
- a. Discretionary Access Control
- b. Mandatory Access Control
- c. Role Based Access Control
- d. Behavior Based Access Control

**Answer:** c. Role Based Access Control

**Explanation:**
- **a is incorrect:** Discretionary Access Control (DAC) allows individual data owners to grant access to others. Sara doesn't own the data.
- **b is incorrect:** Mandatory Access Control (MAC) is based on strict clearance levels and security labels (e.g., Top Secret).
- **c is correct:** Her permissions are strictly tied to her defined "role" (database manager), which grants administrative privileges but restricts data read access.
- **d is incorrect:** Behavior Based Access Control grants/denies access based on real-time anomaly detection, not static roles.

## Question 4 (Page 4)
**Your organization hired a cybersecurity expert to perform a security assessment. After running a vulnerability scan, she sees the following error on a web server: Host IP 192.168.1.10 OS Apache httpd 2.433 Vulnerable to mod_auth, exploit However, she verified that the mod_auth module has not been installed or enabled on the server. Which of the following BEST explains this scenario?**
- a. A false negative
- b. The result of a credentialed scan
- c. The result of a non-credentialed scan
- d. A false positive

**Answer:** d. A false positive

**Explanation:**
- **a is incorrect:** A false negative means a real vulnerability was missed by the scanner.
- **b is incorrect:** While credentialed scans are more accurate, the specific scenario described points to an incorrect detection.
- **c is incorrect:** A non-credentialed scan might be the *cause* of the error, but the best term for the outcome itself is a false positive.
- **d is correct:** The scanner incorrectly flagged a vulnerability for a module that isn't even installed, which is the definition of a false positive.

## Question 5 (Page 5)
**________ involves generating, collecting disseminating, and storing information**
- a. Communication Management
- b. Configuration Management
- c. Concurrent Management
- d. Critical Management

**Answer:** a. Communication Management

**Explanation:**
- **a is correct:** In project management, Communication Management ensures that project information is properly collected, stored, and distributed.
- **b is incorrect:** Configuration Management deals with version control and tracking changes to physical or digital assets.
- **c is incorrect:** Concurrent Management refers to overlapping task execution.
- **d is incorrect:** Critical Management is not a standard industry term.

## Question 6 (Page 6)
**Which of the following is the primary goal of software engineering?**
- a. To produce reliable, efficient, and maintainable software
- b. To increase hardware performance
- c. To create visually appealing user interfaces
- d. To develop low-level machine code

**Answer:** a. To produce reliable, efficient, and maintainable software

**Explanation:**
- **a is correct:** Software engineering applies formal engineering principles to create software that is dependable, performs well, and can be easily maintained over time.
- **b is incorrect:** Hardware performance is optimized by hardware engineers and computer architects.
- **c is incorrect:** UI/UX design is only one specific sub-discipline of software engineering.
- **d is incorrect:** Most modern software engineering is done in high-level languages, not low-level machine code.

## Question 7 (Page 7)
**The bias-variance trade-off implies that:**
- a. Underfitting is caused by low variance.
- b. Increasing model complexity reduces both bias and variance.
- c. Overfitting occurs when bias is too high.
- d. Simple models have high bias and low variance.

**Answer:** d. Simple models have high bias and low variance.

**Explanation:**
- **a is incorrect:** Underfitting is primarily caused by high bias (inflexibility), not low variance.
- **b is incorrect:** Increasing model complexity reduces bias but *increases* variance.
- **c is incorrect:** Overfitting happens when a model has low bias and *high* variance.
- **d is correct:** A simple model (like linear regression) cannot capture complex patterns (high bias) but its predictions won't fluctuate wildly with different training sets (low variance).

## Question 8 (Page 8)
*(Reference for Question 9 - Firewall 3 rules table)*
**Users in the hot site are unable to access websites in the internet. The following table shows the current rules configured in Firewall 3.**

| Rule | Destination | Source | Protocol | Action |
| --- | --- | --- | --- | --- |
| HTTPS Outbound | Any | 10.0.3.0/24 | HTTPS | Allow |
| HTTP Outbound | Any | 10.0.3.0/24 | HTTP | Block |
| DNS | Any | 10.0.1.0/24 | DNS | Allow |
| HTTPS Inbound | 10.0.3.0/24 | Any | HTTPS | Allow |
| HTTP Inbound | 10.0.3.0/24 | Any | HTTP | Block |
| Telnet | 10.0.3.0/24 | Any | Telnet | Block |
| SSH | 10.0.3.0/24 | Any | SSH | Allow |

**Explanation:** This page only displays the table used to answer Question 9.

## Question 9 (Page 9)
**Your organization has added a hot site as shown in the following graphic. You're asked to verify the rules are configured correctly. Which rule, if any, should be changed in Firewall 3?**
- a. HTTP Outbound
- b. DNS
- c. HTTPS Outbound
- d. Telnet

**Answer:** b. DNS

**Explanation:**
- **a is incorrect:** HTTP Outbound is correctly blocked to enforce the "only secure protocols" requirement.
- **b is correct:** The DNS rule incorrectly specifies the HQ subnet (`10.0.1.0/24`) as the source instead of the hot site subnet (`10.0.3.0/24`). Without DNS resolution, hot site users cannot load websites.
- **c is incorrect:** HTTPS Outbound is already configured correctly to allow traffic from the hot site.
- **d is incorrect:** Telnet is an insecure protocol and is correctly blocked.

## Question 10 (Page 10)
**How do you check if an element exists in a set? Using**
- a. in keyword
- b. check()
- c. exists()
- d. contains()

**Answer:** a. in keyword

**Explanation:**
- **a is correct:** In Python, the `in` keyword is the standard operator for membership testing (e.g., `if item in my_set:`).
- **b is incorrect:** Sets do not have a built-in `check()` method.
- **c is incorrect:** Sets do not have a built-in `exists()` method.
- **d is incorrect:** While the magic method `__contains__()` powers the operator under the hood, developers use the `in` keyword directly.

## Question 11 (Page 11)
**Which principle refers to minimizing the interdependence between software modules?**
- a. Abstraction
- b. Coupling
- c. Cohesion
- d. Modularity

**Answer:** b. Coupling

**Explanation:**
- **a is incorrect:** Abstraction hides complex implementation details behind simpler interfaces.
- **b is correct:** Coupling is the degree of interdependence between software modules. Good design strives for "loose coupling" (minimized interdependence).
- **c is incorrect:** Cohesion refers to how strongly related and focused the responsibilities are *within* a single module.
- **d is incorrect:** Modularity is the broad concept of breaking systems down, but coupling specifically measures their inter-reliance.

## Question 12 (Page 12)
**A process goes from running-state to blocked-state whenever a running process:**
- a. moved to secondary storage because of memory shortage
- b. needs to get input/output in the middle of execution
- c. interrupted by a higher priority process
- d. None
- e. CPU executes context switching

**Answer:** b. needs to get input/output in the middle of execution

**Explanation:**
- **a is incorrect:** Moving to secondary storage places the process in a suspended state (swap).
- **b is correct:** When a process requests an I/O operation (like reading a file), it cannot continue executing until the I/O is complete. The OS moves it to the blocked (or waiting) state.
- **c is incorrect:** Being interrupted by a higher priority process forces it back to the "ready" state, not the "blocked" state.
- **e is incorrect:** Context switching moves the current process to the "ready" state if its time slice expires.

## Question 13 (Page 13)
**Which CSS property is used to control the stacking order of positioned elements?**
- a. z-index
- b. float
- c. position
- d. display

**Answer:** a. z-index

**Explanation:**
- **a is correct:** The `z-index` property sets the z-order (depth) of a positioned element, determining which elements appear in front of others.
- **b is incorrect:** `float` pushes an element to the side and allows text to wrap around it.
- **c is incorrect:** `position` defines *how* an element is placed (absolute, relative, fixed), but not its stacking depth.
- **d is incorrect:** `display` determines the rendering box type (block, flex, grid, none).

## Question 14 (Page 14)
**Consider the following method, setValue, which adds a value into an array list**
```java
public void setValue (int position, String valueIn) {
    list[position-1] = valueIn;
}
```
**Assuming that list has been declared as an array of Strings, which one of the following might cause the setValue method to throw an ArrayIndexOutOfBounds exception:**
- a. the value of the first parameter ;
- b. not declaring the method static;
- c. the method having more than one parameter;
- d. the type of the parameter position being declared as an int;
- e. the return type being declared as void;

**Answer:** a. the value of the first parameter ;

**Explanation:**
- **a is correct:** If the first parameter `position` is 0 or less, `position-1` will be negative. If it exceeds the array's capacity, it will exceed the maximum index, throwing an `ArrayIndexOutOfBoundsException`.
- **b is incorrect:** Missing a `static` keyword simply makes it an instance method, causing no runtime crashes.
- **c is incorrect:** Methods can safely have dozens of parameters without throwing exceptions.
- **d is incorrect:** Array indices *must* be `int`, so this is perfectly valid.
- **e is incorrect:** A `void` return type means the method does not return a value, which is safe.

## Question 15 (Page 15)
**When you want to navigate to a specific Activity within your application, which type of Intent is typically used?**
- a. Explicit intent
- b. Broadcast intent
- c. Pending intent
- d. Implicit intent

**Answer:** a. Explicit intent

**Explanation:**
- **a is correct:** Explicit intents name the exact component (class) to start, making them perfect for navigating between known Activities inside your own application.
- **b is incorrect:** Broadcast intents send messages system-wide or app-wide, rather than launching an Activity directly.
- **c is incorrect:** Pending intents are wrappers that grant another application (like NotificationManager) permission to execute an intent later.
- **d is incorrect:** Implicit intents specify a general action (like "View a map") and let the OS find an app that can handle it.

## Question 16 (Page 16)
*(Duplicate of Question 15)*
**When you want to navigate to a specific Activity within your application, which type of Intent is typically used?**
- a. Explicit intent
- b. Broadcast intent
- c. Pending intent
- d. Implicit intent

**Answer:** a. Explicit intent
**Explanation:** See Question 15.

## Question 17 (Page 17)
*(Duplicate of Question 13)*
**Which CSS property is used to control the stacking order of positioned elements?**
- a. z-index
- b. float
- c. position
- d. display

**Answer:** a. z-index
**Explanation:** See Question 13.

## Question 18 (Page 18)
**In a neural network, the activation function introduces:**
- a. Dimensionality reduction.
- b. Regularization to prevent overfitting.
- c. Linear decision boundaries.
- d. Non-linearity to model complex patterns.

**Answer:** d. Non-linearity to model complex patterns.

**Explanation:**
- **a is incorrect:** Dimensionality reduction is achieved via specialized layers (like pooling layers) or techniques like PCA.
- **b is incorrect:** Regularization uses techniques like Dropout, L1/L2 penalties, or early stopping, not the activation function.
- **c is incorrect:** Activation functions specifically destroy linear boundaries to allow the network to learn more complex shapes.
- **d is correct:** Without non-linear activation functions, no matter how many layers a neural network has, it would only be capable of computing linear transformations.

## Question 19 (Page 19)
*(Duplicate of Question 18)*
**In a neural network, the activation function introduces:**
- a. Dimensionality reduction.
- b. Regularization to prevent overfitting.
- c. Linear decision boundaries.
- d. Non-linearity to model complex patterns.

**Answer:** d. Non-linearity to model complex patterns.
**Explanation:** See Question 18.

## Question 20 (Page 20)
**How can web developers accommodate users with mobility impairments?**
- a. Ensuring all controls are accessible via keyboard
- b. Limiting access to only touch-screen devices
- c. Removing all interactive elements
- d. Making users rely on a mouse for navigation

**Answer:** a. Ensuring all controls are accessible via keyboard

**Explanation:**
- **a is correct:** Many users with mobility impairments cannot comfortably use a mouse. Fully supporting keyboard navigation (or switch devices) ensures they can access all controls.
- **b is incorrect:** Touch screens require fine motor control, which can be extremely difficult for mobility-impaired users.
- **c is incorrect:** Removing interactive elements ruins the experience for everyone and prevents users from completing tasks.
- **d is incorrect:** Mouse navigation requires precision that many mobility-impaired users do not possess.

## Question 21 (Page 21)
**Which CSS property is used to control the space between the content and the border of an element?**
- a. border-spacing
- b. padding
- c. margin
- d. spacing

**Answer:** b. padding

**Explanation:**
- **a is incorrect:** `border-spacing` controls the distance between the borders of adjacent cells in a `table`.
- **b is correct:** According to the CSS Box Model, `padding` clears an area directly around the content, inside of the element's border.
- **c is incorrect:** `margin` clears an area *outside* of the element's border.
- **d is incorrect:** `spacing` is not a valid standard CSS property.

## Question 22 (Page 22)
*(Duplicate of Question 21)*
**Which CSS property is used to control the space between the content and the border of an element?**
- a. border-spacing
- b. padding
- c. margin
- d. spacing

**Answer:** b. padding
**Explanation:** See Question 21.

## Question 23 (Page 23)
**The values appearing in given attributes of any tuple in the referencing relation must likewise occur in specified attributes of at least one tuple in the referenced relation. what integrity constraint dictate this?**
- a. Referential
- b. Specific
- c. Referencing
- d. Primary

**Answer:** a. Referential

**Explanation:**
- **a is correct:** Referential integrity guarantees that foreign key relationships are valid, ensuring that a referenced record cannot be deleted or modified if it breaks the link to a referencing record.
- **b is incorrect:** "Specific" is not a formal integrity constraint type in relational databases.
- **c is incorrect:** While it describes the "referencing" table, the formal term for the constraint is "Referential".
- **d is incorrect:** Primary integrity (Entity Integrity) dictates that every table must have a primary key and that the key cannot be null.

## Question 24 (Page 24)
**Which class of IP addresses is reserved for experimental use?**
- a. Class E
- b. Class A
- c. Class D
- d. Class C

**Answer:** a. Class E

**Explanation:**
- **a is correct:** In IPv4 classful routing, Class E addresses (ranging from 240.0.0.0 to 255.255.255.255) are strictly reserved by the IETF for research and experimental purposes.
- **b is incorrect:** Class A is used for massive networks (0.0.0.0 to 127.255.255.255).
- **c is incorrect:** Class D is explicitly reserved for multicast traffic (224.0.0.0 to 239.255.255.255).
- **d is incorrect:** Class C is used for small local networks.

## Question 25 (Page 25)
**What is printed by the following statements?**
```python
>>> Str1 = "PYTHON programming"
>>> print(Str1[2] * Str1.index("O"))
```
- a. THON
- b. OOOO
- c. YYYY
- d. TTTT

**Answer:** d. TTTT

**Explanation:**
- **a is incorrect:** Python strings multiplied by an integer do not slice substrings; they repeat the character.
- **b is incorrect:** The character being multiplied is `Str1[2]`, which is 'T', not 'O'.
- **c is incorrect:** The character 'Y' is at index 1 (`Str1[1]`).
- **d is correct:** `Str1[2]` retrieves the 3rd character ('T'). `Str1.index("O")` searches for the first "O", which is at index 4. Multiplying a string by an integer in Python repeats it: `'T' * 4` evaluates to `'TTTT'`.

## Question 26 (Page 26)
*(Duplicate of Question 25)*
**What is printed by the following statements?**
```python
>>> Str1 = "PYTHON programming"
>>> print(Str1[2] * Str1.index("O"))
```
- a. THON
- b. OOOO
- c. YYYY
- d. TTTT

**Answer:** d. TTTT
**Explanation:** See Question 25.

## Question 27 (Page 27)
*(Duplicate of Question 25)*
**What is printed by the following statements?**
```python
>>> Str1 = "PYTHON programming"
>>> print(Str1[2] * Str1.index("O"))
```
- a. THON
- b. OOOO
- c. YYYY
- d. TTTT

**Answer:** d. TTTT
**Explanation:** See Question 25.

## Question 28 (Page 28)
**Which of the following is a literal?**
- a. True
- b. a = x + 3
- c. num = 2.0 + 3.0
- d. hello

**Answer:** a. True

**Explanation:**
- **a is correct:** A literal is a notation for representing a fixed value in source code. `True` is a boolean literal.
- **b is incorrect:** This is an assignment statement involving an expression.
- **c is incorrect:** This is an assignment statement utilizing mathematical evaluation.
- **d is incorrect:** Without quotes around it, `hello` is treated as a variable identifier, not a string literal.

## Question 29 (Page 29)
**Decision trees classify data points by recursively splitting the data space based on ______ features.**
- a. all available
- b. numerical
- c. most relevant
- d. most correlated

**Answer:** c. most relevant

**Explanation:**
- **a is incorrect:** Decision trees evaluate all features but only select one feature per node to perform the split.
- **b is incorrect:** Decision trees can handle categorical features just as well as numerical ones.
- **c is correct:** The core mechanism of decision tree learning is selecting the *most relevant* feature to split on at each step, typically determined by maximizing Information Gain or minimizing Gini Impurity.
- **d is incorrect:** Correlation measures relationships between continuous variables, which is not the metric decision trees use for purity splits.

## Question 30 (Page 30)
**A startup is building an e-commerce platform expecting rapid growth. They need an architecture that allows independent scaling of the product catalog, payment processing, and recommendation engine. Which architectural style is most suitable?**
- a. Single-tier architecture (all logic on the client side)
- b. Shared-database architecture (all services use one database)
- c. Microservices architecture (independent, loosely coupled services)
- d. Monolithic architecture (all components in one codebase)

**Answer:** c. Microservices architecture (independent, loosely coupled services)

**Explanation:**
- **a is incorrect:** Placing all logic on the client side is insecure and cannot handle heavy backend database/payment loads.
- **b is incorrect:** A shared database tightly couples the services together, creating a bottleneck that prevents true independent scaling.
- **c is correct:** Microservices decompose an application into loosely coupled services, meaning the recommendation engine can scale up massively without forcing the payment processing service to scale too.
- **d is incorrect:** A monolith binds all components together; you cannot scale them independently.

## Question 31 (Page 31)
*(Duplicate of Question 30)*
**A startup is building an e-commerce platform expecting rapid growth. They need an architecture that allows independent scaling of the product catalog, payment processing, and recommendation engine. Which architectural style is most suitable?**
- a. Single-tier architecture (all logic on the client side)
- b. Shared-database architecture (all services use one database)
- c. Microservices architecture (independent, loosely coupled services)
- d. Monolithic architecture (all components in one codebase)

**Answer:** c. Microservices architecture (independent, loosely coupled services)
**Explanation:** See Question 30.

## Question 32 (Page 32)
**The specific set of sequential tasks upon which the project completion date depends or the longest full path is called_________**
- a. Complete Path
- b. Project Path
- c. Critical Path
- d. Full path

**Answer:** c. Critical Path

**Explanation:**
- **a is incorrect:** Not a standard project management term.
- **b is incorrect:** Too generic; doesn't specifically refer to the dependency chain dictating the end date.
- **c is correct:** In the Critical Path Method (CPM), the critical path is the longest sequence of tasks in a project plan which must be completed on time for the project to complete on deadline.
- **d is incorrect:** Not a recognized formal term in project scheduling.

## Question 33 (Page 33)
*(Duplicate of Question 32)*
**The specific set of sequential tasks upon which the project completion date depends or the longest full path is called_________**
- a. Complete Path
- b. Project Path
- c. Critical Path
- d. Full path

**Answer:** c. Critical Path
**Explanation:** See Question 32.

## Question 34 (Page 34)
**How do you create a CSS rule that applies only to screen devices with a maximum width of 600px?**
- a. @media screen and (max-width: 600px) { ... }
- b. @media screen and (min-width: 600px) { ... }
- c. @media print screen and (max-width: 600px) { ... }
- d. @media all and (max-width: 600px) { ... }

**Answer:** a. @media screen and (max-width: 600px) { ... }

**Explanation:**
- **a is correct:** The `screen` media type restricts it to digital screens, and `(max-width: 600px)` ensures it only applies to screens that are 600 pixels wide or smaller.
- **b is incorrect:** `min-width` applies to screens that are 600 pixels wide or *larger*.
- **c is incorrect:** The syntax `print screen` is invalid CSS. It should be comma-separated `print, screen` if targeting multiple media types.
- **d is incorrect:** `all` applies the rule to screens, print, and screen readers, not *only* to screen devices.

## Question 35 (Page 35)
*(Duplicate of Question 34)*
**How do you create a CSS rule that applies only to screen devices with a maximum width of 600px?**
- a. @media screen and (max-width: 600px) { ... }
- b. @media screen and (min-width: 600px) { ... }
- c. @media print screen and (max-width: 600px) { ... }
- d. @media all and (max-width: 600px) { ... }

**Answer:** a. @media screen and (max-width: 600px) { ... }
**Explanation:** See Question 34.

## Question 36 (Page 36)
**Delphi approach is also called _______ group consensus technique.**
- a. Fully Consultative
- b. Consultative
- c. Non-Consultative
- d. Partially Consultative

**Answer:** c. Non-Consultative

**Explanation:**
- **a is incorrect:** A fully consultative technique implies open, face-to-face debate and group interaction.
- **b is incorrect:** Consultative implies direct interaction between experts.
- **c is correct:** The Delphi technique relies on a panel of experts who provide forecasts anonymously in multiple rounds. Because they never meet face-to-face or debate directly, it is formally known as a non-consultative group technique.
- **d is incorrect:** Nominal group technique is usually considered partially consultative, but Delphi is strictly non-consultative.

## Question 37 (Page 37)
**What will be printed when the following code is executed?**
```python
>>> tuple1 = (1, 2, 3, 4)
>>> print(tuple1[1:-1])
```
- a. Error: tuple slicing
- b. (1, 2, 3, 4)
- c. (2, 3)
- d. (2, 3, 4)

**Answer:** c. (2, 3)

**Explanation:**
- **a is incorrect:** Slicing works identically on tuples as it does on lists in Python.
- **b is incorrect:** Slicing limits the output; it does not return the entire tuple unless unbounded like `[:]`.
- **c is correct:** The start index is 1 (the number `2`). The end index is -1 (the number `4`). Python slice endpoints are *exclusive*, so it stops before the number 4, yielding only `(2, 3)`.
- **d is incorrect:** It would only include the 4 if the slice went to the very end (`tuple1[1:]`).

## Question 38 (Page 38)
**What is the worst-case time complexity of Merge Sort?**
- a. O(n)
- b. O(n log n)
- c. O(log n)
- d. O(n²)

**Answer:** b. O(n log n)

**Explanation:**
- **a is incorrect:** No general-purpose comparison-based sorting algorithm operates in O(n) time.
- **b is correct:** Merge Sort recursively divides the array in half and merges the halves. This deterministic process ensures it performs exactly O(n log n) operations in the best, average, and worst-case scenarios.
- **c is incorrect:** O(log n) is the time complexity of Binary Search.
- **d is incorrect:** O(n²) is the worst-case for Bubble Sort, Insertion Sort, and Quick Sort, but Merge Sort is immune to this degradation.

## Question 39 (Page 39)
**Which of the following describes the possible alternative ways in which files on a disk can be accessed?**
- a. random or binary;
- b. text or binary;
- c. serial or random;
- d. object or serial;
- e. binary or random.

**Answer:** c. serial or random;

**Explanation:**
- **a is incorrect:** "Binary" describes the encoding format of the file, not how the OS traverses the disk to read it.
- **b is incorrect:** These refer to file contents, not access methodology.
- **c is correct:** Files can be read sequentially (serial access) by reading byte by byte from the beginning, or via direct (random access) by seeking to a specific byte offset instantly.
- **d is incorrect:** Object storage is an architectural model (like S3), not a disk access pattern.
- **e is incorrect:** Binary is a file encoding.

## Question 40 (Page 40)
**Your organization's backup policy for a file server dictates that the amount of time needed to restore backups should be minimized. Which of the following backup plans would BEST meet this need?**
- a. Full backups on Sunday and differential backups on the other six days of the week
- b. Full backups on Sunday and incremental backups on the other six days of the week
- c. Differential backups on Sunday and incremental backups on the other six days of the week
- d. Incremental backups on Sunday and differential backups on the other six days of the week

**Answer:** a. Full backups on Sunday and differential backups on the other six days of the week

**Explanation:**
- **a is correct:** A differential backup saves all changes made since the last *full* backup. To restore, you only need to process two datasets: the Sunday Full Backup and the most recent Differential Backup. This makes restoration very fast.
- **b is incorrect:** Incremental backups save changes since the *last incremental* backup. Restoring requires applying the full backup, then sequentially applying Monday, Tuesday, Wednesday, etc. This is very slow.
- **c is incorrect:** You must always have a full baseline backup.
- **d is incorrect:** You must always have a full baseline backup.

## Question 41 (Page 41)
**Which of the following best describes the role of a file system in an operating system?**
- a. None
- b. It provides a structured way to store, organize, retrieve, and manage files on storage devices
- c. It optimizes network bandwidth usage for file transfers over the internet
- d. It handles user authentication and access control for logging into the system
- e. It manages the computer's hardware resources, such as CPU and memory

**Answer:** b. It provides a structured way to store, organize, retrieve, and manage files on storage devices

**Explanation:**
- **a is incorrect:** Option b is correct.
- **b is correct:** A file system (like NTFS, ext4, or FAT32) organizes raw disk sectors into logical structures like directories and files, enabling data retrieval.
- **c is incorrect:** Network bandwidth optimization is handled by networking protocols (TCP/IP).
- **d is incorrect:** Authentication is handled by IAM systems (like Active Directory or PAM in Linux).
- **e is incorrect:** Hardware resources (CPU/RAM) are managed by the kernel scheduler and memory manager.

## Question 42 (Page 42)
**Which type of data can be stored in the database?**
- a. All of the above
- b. Text, files containing data
- c. Image oriented data
- d. Data in the form of audio or video

**Answer:** a. All of the above

**Explanation:**
- **a is correct:** Modern relational and NoSQL databases natively support storing complex unstructured data (images, audio, video) using Binary Large Object (BLOB) data types, alongside standard text.
- **b is incorrect:** True, but it excludes images/video.
- **c is incorrect:** True, but incomplete.
- **d is incorrect:** True, but incomplete.

## Question 43 (Page 43)
**What is the primary purpose of WAI-ARIA?**
- a. To improve website SEO rankings
- b. To replace HTML with a new accessibility standard
- c. To increase website loading speed
- d. To make web applications more accessible

**Answer:** d. To make web applications more accessible

**Explanation:**
- **a is incorrect:** While accessible, semantic sites often rank better, ARIA's core purpose is purely for screen readers and assistive technology, not search engines.
- **b is incorrect:** ARIA acts as a supplement/overlay to HTML; it relies on HTML and does not replace it.
- **c is incorrect:** ARIA tags have absolutely zero impact on load times or performance.
- **d is correct:** WAI-ARIA provides specific attributes (`aria-label`, `role`, etc.) that allow developers to describe dynamic web elements so that assistive technologies (like screen readers) can understand them.

## Question 44 (Page 44)
**Which operation is used to extract specified columns from a table?**
- a. Project
- b. Join
- c. Substitute
- d. Extract

**Answer:** a. Project

**Explanation:**
- **a is correct:** In relational algebra, the Projection operation (denoted by the Greek letter Pi, $\pi$) outputs a specific subset of columns from a relation while eliminating duplicates.
- **b is incorrect:** A Join operation combines columns from two or more tables based on a related attribute.
- **c is incorrect:** Substitute is not a standard relational algebra operator.
- **d is incorrect:** While "extracting" is what it does conceptually, the formal mathematical term is Project.

## Question 45 (Page 45)
**Which software process model emphasizes strict sequential flow between phases?**
- a. Incremental Model
- b. Agile Model
- c. Spiral Model
- d. Waterfall Model

**Answer:** d. Waterfall Model

**Explanation:**
- **a is incorrect:** Incremental models build the software in small, overlapping, repeated chunks.
- **b is incorrect:** Agile is highly iterative, flexible, and relies on continuous feedback rather than strict sequential steps.
- **c is incorrect:** The Spiral model is risk-driven and circles through the same phases multiple times.
- **d is correct:** The Waterfall model requires that each phase of the SDLC (Requirements, Design, Implementation, Testing, Deployment) be fully completed before the next phase begins.

## Question 46 (Page 46)
**Which Activity lifecycle callback is the first one called after the Activity is launched and is where initial setup like inflating the UI layout typically occurs?**
- a. onResume()
- b. onStart()
- c. onAttach()
- d. onCreate()

**Answer:** d. onCreate()

**Explanation:**
- **a is incorrect:** `onResume()` fires immediately before the activity starts interacting with the user, after `onStart()`.
- **b is incorrect:** `onStart()` fires after `onCreate()` when the activity becomes visible to the user.
- **c is incorrect:** `onAttach()` is a callback for Fragments when they are attached to their host Activity, not an Activity callback.
- **d is correct:** `onCreate()` is the very first callback triggered when the system creates the Activity instance, making it the perfect place to call `setContentView()`.

## Question 47 (Page 47)
*(Duplicate of Question 46)*
**Which Activity lifecycle callback is the first one called after the Activity is launched and is where initial setup like inflating the UI layout typically occurs?**
- a. onResume()
- b. onStart()
- c. onAttach()
- d. onCreate()

**Answer:** d. onCreate()
**Explanation:** See Question 46.

## Question 48 (Page 48)
**What does empirical analysis of an algorithm typically involve?**
- a. Deriving mathematical formulas for performance
- b. Estimating time complexity using Big-O
- c. Measuring runtime and memory usage through experiments
- d. Analyzing code without running it

**Answer:** c. Measuring runtime and memory usage through experiments

**Explanation:**
- **a is incorrect:** Deriving mathematical formulas is theoretical (a priori) analysis.
- **b is incorrect:** Big-O notation represents theoretical asymptotic bounds, not empirical data.
- **c is correct:** Empirical (a posteriori) analysis relies on actual experimentation—compiling the code, running it on varying input sizes, and recording real execution times and RAM usage.
- **d is incorrect:** Analyzing code without running it is static code analysis.

## Question 49 (Page 49)
**What is the main idea behind dynamic programming?**
- a. Store solutions of subproblems to avoid recomputation
- b. Solve only the simplest problem
- c. Solve every subproblem independently
- d. Divide the problem into unrelated subproblems

**Answer:** a. Store solutions of subproblems to avoid recomputation

**Explanation:**
- **a is correct:** Dynamic programming optimizes exhaustive recursive search by storing the results of overlapping subproblems in memory (memoization or tabulation), ensuring each subproblem is only computed once.
- **b is incorrect:** It solves all necessary subproblems to construct the answer to the complex parent problem.
- **c is incorrect:** If subproblems were truly independent, standard Divide and Conquer would be used. DP is used specifically because subproblems *overlap*.
- **d is incorrect:** DP is for related, overlapping subproblems. Unrelated subproblems belong to Divide and Conquer.

## Question 50 (Page 50)
**HMMs are useful for modeling sequential data where the underlying states are _.**
- a. Pre-defined
- b. completely random
- c. partially observable
- d. always observable

**Answer:** c. partially observable

**Explanation:**
- **a is incorrect:** While states are defined in the model architecture, this is not the defining characteristic of an HMM.
- **b is incorrect:** States transition according to strict probability matrices, not pure randomness.
- **c is correct:** The term "Hidden" in Hidden Markov Models implies that while the outputs (emissions) are visible, the actual internal states the system passes through are unobservable (hidden) to the outside observer.
- **d is incorrect:** If states were always fully observable, the system would simply be a standard Markov Chain.

## Question 51 (Page 51)
**What is the output of the following code?**
```python
>>> my_list = [1,2,3,4,5,6,7,8,9,10]
>>> my_list[5::-2]
```
- a. [6,4,2]
- b. []
- c. [5,7,9]
- d. [5,4,3,2,1]

**Answer:** a. [6,4,2]

**Explanation:**
- **a is correct:** The slice syntax is `[start:stop:step]`. We start at index 5, which corresponds to the value `6`. The step is `-2`, meaning we move backward by two indices. Next index is 3 (value `4`). Next index is 1 (value `2`). We cannot step back further, so the output is `[6, 4, 2]`.
- **b is incorrect:** A valid reverse slice generates a list, not an empty one.
- **c is incorrect:** This would be generated by a positive step `[4::2]`.
- **d is incorrect:** This would be generated by a step of `-1`, `[4::-1]`.

## Question 52 (Page 52)
**Which of the following search algorithms guarantees both completeness and optimality, assuming the heuristic is admissible and consistent?**
- a. Greedy Best-First Search
- b. A* Search
- c. Hill Climbing
- d. Depth-First Search

**Answer:** b. A* Search

**Explanation:**
- **a is incorrect:** Greedy Best-First Search only considers the heuristic distance to the goal, leading it to dead ends, making it neither complete nor optimal.
- **b is correct:** A* evaluates nodes by combining the cost to reach the node ($g(n)$) and the estimated cost to the goal ($h(n)$). If $h(n)$ is admissible (never overestimates) and consistent, A* is mathematically guaranteed to find the shortest path.
- **c is incorrect:** Hill climbing easily gets stuck in local maxima and is not complete.
- **d is incorrect:** Depth-First Search is neither optimal nor complete (it can get stuck in infinite depth loops).

## Question 53 (Page 53)
*(Duplicate of Question 52)*
**Which of the following search algorithms guarantees both completeness and optimality, assuming the heuristic is admissible and consistent?**
- a. Greedy Best-First Search
- b. A* Search
- c. Hill Climbing
- d. Depth-First Search

**Answer:** b. A* Search
**Explanation:** See Question 52.

## Question 54 (Page 54)
**What will be the output of the following code?**
```javascript
var x = 5;
var y = '5';
console.log(x == y);
```
- a. null
- b. undefined
- c. false
- d. true

**Answer:** d. true

**Explanation:**
- **a is incorrect:** Comparisons in JavaScript return booleans.
- **b is incorrect:** Comparisons in JavaScript return booleans.
- **c is incorrect:** This would be the result if strict equality (`===`) was used, as it checks both type and value.
- **d is correct:** JavaScript's loose equality operator (`==`) performs type coercion. It automatically converts the string `'5'` to the number `5` before making the comparison, resulting in `true`.

## Question 55 (Page 55)
**Which evaluation metric is most suitable for imbalanced classification problems?**
- a. Accuracy
- b. R-squared
- c. F1-Score
- d. Mean Squared Error (MSE)

**Answer:** c. F1-Score

**Explanation:**
- **a is incorrect:** In a dataset where 99% of samples are 'Negative', a model that blindly predicts 'Negative' for everything will have 99% accuracy but be entirely useless.
- **b is incorrect:** R-squared evaluates the goodness of fit for continuous regression models.
- **c is correct:** The F1-Score is the harmonic mean of Precision and Recall. It severely penalizes models that favor the majority class while missing the minority class, making it the ideal metric for imbalanced data.
- **d is incorrect:** MSE is used to evaluate errors in continuous regression problems.

## Question 56 (Page 56)
**Which statement about ensemble methods (e.g., Random Forests) is TRUE?**
- a. They average predictions to decrease variance.
- b. They combine weak learners to reduce bias only.
- c. They require all base models to be identical.
- d. They perform poorly compared to single models.

**Answer:** a. They average predictions to decrease variance.

**Explanation:**
- **a is correct:** Bagging algorithms like Random Forests build multiple deep, overfitted decision trees (which have high variance). By averaging their uncorrelated predictions, the overall variance is dramatically reduced.
- **b is incorrect:** While Boosting algorithms (like AdaBoost) reduce bias, Random Forests specifically target variance.
- **c is incorrect:** Ensemble methods rely on the base models being diverse (e.g., trained on random subsets of data or features). If they were identical, averaging them would provide no benefit.
- **d is incorrect:** Ensembles are heavily utilized because they almost universally outperform individual models.

## Question 57 (Page 57)
**In a graph, what does a cycle represent?**
- a. A path that starts and ends at the same vertex
- b. A linear path
- c. A set of disconnected vertices
- d. A spanning tree

**Answer:** a. A path that starts and ends at the same vertex

**Explanation:**
- **a is correct:** In graph theory, a cycle is a non-empty trail in which the only repeated vertices are the first and last vertices, forming a closed loop.
- **b is incorrect:** A linear path progresses from vertex to vertex without ever returning to its origin.
- **c is incorrect:** This describes an unconnected graph.
- **d is incorrect:** By definition, a spanning tree is an acyclic graph that connects all vertices. It specifically cannot contain cycles.

## Question 58 (Page 58)
**_____________ is a hierarchical and incremental decomposition of the project into phases, deliverables and work packages.**
- a. Work Breakdown Structure
- b. Work Integration Structure
- c. Task Integration Structure
- d. Bottom-up Integration Structure

**Answer:** a. Work Breakdown Structure

**Explanation:**
- **a is correct:** A Work Breakdown Structure (WBS) breaks down complex project scope into smaller, more manageable components, ending with specific "work packages" that can be easily scheduled and costed.
- **b is incorrect:** This is not a standard project management framework term.
- **c is incorrect:** This is an invalid, fabricated term.
- **d is incorrect:** WBS utilizes top-down decomposition, not bottom-up integration.

## Question 59 (Page 59)
*(Duplicate of Question 58)*
**_____________ is a hierarchical and incremental decomposition of the project into phases, deliverables and work packages.**
- a. Work Breakdown Structure
- b. Work Integration Structure
- c. Task Integration Structure
- d. Bottom-up Integration Structure

**Answer:** a. Work Breakdown Structure
**Explanation:** See Question 58.

## Question 60 (Page 60)
**In a CIDR block of 192.168.100.0/23, what is the broadcast address?**
- a. 192.168.100.255
- b. 192.168.102.0
- c. 192.168.100.1
- d. 192.168.101.255

**Answer:** d. 192.168.101.255

**Explanation:**
- **a is incorrect:** `192.168.100.255` would be the broadcast address for a `/24` subnet.
- **b is incorrect:** `192.168.102.0` represents the network address of the *next* block of `/23` subnets.
- **c is incorrect:** `192.168.100.1` is a valid host IP, usually assigned to the default gateway.
- **d is correct:** A `/23` subnet means 23 bits define the network, leaving 9 bits for the host. The network ranges from `192.168.100.0` to `192.168.101.255`. The broadcast address is calculated by setting all host bits to 1, yielding `192.168.101.255`.

## Question 61 (Page 61)
*(Duplicate of Question 60)*
**In a CIDR block of 192.168.100.0/23, what is the broadcast address?**
- a. 192.168.100.255
- b. 192.168.102.0
- c. 192.168.100.1
- d. 192.168.101.255

**Answer:** d. 192.168.101.255
**Explanation:** See Question 60.

## Question 62 (Page 62)
*(Duplicate of Question 60)*
**In a CIDR block of 192.168.100.0/23, what is the broadcast address?**
- a. 192.168.100.255
- b. 192.168.102.0
- c. 192.168.100.1
- d. 192.168.101.255

**Answer:** d. 192.168.101.255
**Explanation:** See Question 60.

## Question 63 (Page 63)
**Which one of the following scheduling algorithms most likely to cause starvation?**
- a. Round-Robin (RR)
- b. None
- c. First-Come, First Served (FCFS)
- d. Priority-Based With Aging
- e. Short-Job First (SJF)

**Answer:** e. Short-Job First (SJF)

**Explanation:**
- **a is incorrect:** Round-Robin prevents starvation because every process is guaranteed a fixed slice of CPU time.
- **c is incorrect:** While FCFS might cause long wait times (convoy effect), it does not cause starvation because the queue will eventually process every job.
- **d is incorrect:** Aging is a technique specifically designed to *prevent* starvation in priority systems by gradually increasing the priority of waiting jobs.
- **e is correct:** In SJF, if short jobs continuously arrive in the ready queue, a long job will be repeatedly pushed back and may never get executed, starving it.

## Question 64 (Page 64)
**What is a characteristic of Guidelines in ConstraintLayout?**
- a. They are visible to the user on the device screen
- b. They are positioning aids that are not drawn on the device
- c. They automatically group related Views together
- d. They are used to define the maximum size of a View

**Answer:** b. They are positioning aids that are not drawn on the device

**Explanation:**
- **a is incorrect:** Guidelines are purely for development layout purposes and are `View.GONE` at runtime.
- **b is correct:** Guidelines allow developers to create invisible vertical or horizontal anchor lines, giving other Views flexible reference points to constrain themselves to.
- **c is incorrect:** ConstraintLayout `Group` objects or `Barrier` objects are used for grouping behavior.
- **d is incorrect:** Maximum sizes are defined using standard width/height constraints, not Guidelines.

## Question 65 (Page 65)
**Which of the following is a divide and conquer algorithm?**
- a. Linear Search
- b. Bubble Sort
- c. Binary Search
- d. Insertion Sort

**Answer:** c. Binary Search

**Explanation:**
- **a is incorrect:** Linear Search iterates over an array sequentially from start to finish.
- **b is incorrect:** Bubble Sort compares adjacent items repeatedly; it does not break down the problem into subproblems.
- **c is correct:** Binary Search finds the middle element, determines which half the target lies in, and discards the other half. It "divides" the problem recursively until conquered.
- **d is incorrect:** Insertion Sort iterates and inserts one element at a time into a sorted subset.

## Question 66 (Page 66)
**Which algorithm is most appropriate when the cost of actions varies and finding the least-cost solution is important?**
- a. Uniform Cost Search
- b. Breadth-First Search
- c. Greedy Best-First Search
- d. Depth-First Search

**Answer:** a. Uniform Cost Search

**Explanation:**
- **a is correct:** Uniform Cost Search (UCS) expands the node with the lowest cumulative path cost ($g(n)$). This guarantees finding the lowest-cost path on graphs where step costs differ.
- **b is incorrect:** BFS finds the path with the fewest *edges*, but this is only optimal if all edges have identical costs.
- **c is incorrect:** Greedy search prioritizes getting closer to the goal heuristically, ignoring the accumulated cost, which often results in suboptimal paths.
- **d is incorrect:** DFS blindly explores deep paths and provides absolutely no optimality guarantees.

## Question 67 (Page 67)
**Which of the following is a key challenge in reinforcement learning?**
- a. Requirement of perfectly balanced datasets
- b. Lack of labeled training data
- c. High computational cost of matrix operations
- d. The trade-off between exploration and exploitation

**Answer:** d. The trade-off between exploration and exploitation

**Explanation:**
- **a is incorrect:** Reinforcement learning (RL) does not rely on static pre-collected datasets like supervised learning does.
- **b is incorrect:** RL is specifically designed to function without labeled data, learning entirely from reward signals instead.
- **c is incorrect:** While deep RL relies on matrix operations, this is a hardware challenge typical of deep learning, not a conceptual challenge unique to RL.
- **d is correct:** An RL agent must constantly balance "exploiting" known actions that yield high rewards against "exploring" unknown actions that might yield even higher rewards later.

## Question 68 (Page 68)
*(Duplicate of Question 67)*
**Which of the following is a key challenge in reinforcement learning?**
- a. Requirement of perfectly balanced datasets
- b. Lack of labeled training data
- c. High computational cost of matrix operations
- d. The trade-off between exploration and exploitation

**Answer:** d. The trade-off between exploration and exploitation
**Explanation:** See Question 67.

## Question 69 (Page 69)
**Which of the following is an example of a "Something you know" authentication factor?**
- a. Finger Printing
- b. GPS
- c. ATM Card
- d. Password

**Answer:** d. Password

**Explanation:**
- **a is incorrect:** Fingerprinting is a biometric factor ("Something you are").
- **b is incorrect:** GPS coordinates act as a location factor ("Somewhere you are").
- **c is incorrect:** An ATM card acts as a physical possession factor ("Something you have").
- **d is correct:** Passwords, PINs, and security questions rely on stored memory, fulfilling the "Something you know" authentication factor.

## Question 70 (Page 70)
**Which command can display the current ARP cache on a Windows system?**
- a. netstat -r
- b. ping
- c. ipconfig
- d. arp -a

**Answer:** d. arp -a

**Explanation:**
- **a is incorrect:** `netstat -r` displays the system's IP routing table.
- **b is incorrect:** `ping` sends ICMP echo requests to test reachability.
- **c is incorrect:** `ipconfig` displays the basic TCP/IP configuration of local network adapters.
- **d is correct:** The `arp -a` command polls the Address Resolution Protocol (ARP) tables to display the current mapping of IP addresses to physical MAC addresses.

## Question 71 (Page 71)
*(Duplicate of Question 70)*
**Which command can display the current ARP cache on a Windows system?**
- a. netstat -r
- b. ping
- c. ipconfig
- d. arp -a

**Answer:** d. arp -a
**Explanation:** See Question 70.

## Question 72 (Page 72)
**Slack = _______________________**
- a. ES-LS
- b. ES-LF
- c. LS-EF
- d. LF-EF

**Answer:** d. LF-EF

**Explanation:**
- **a is incorrect:** Calculating Early Start minus Late Start yields a negative value, misrepresenting slack.
- **b is incorrect:** Comparing start to finish times does not accurately calculate slack.
- **c is incorrect:** Mismatched time frames.
- **d is correct:** In the Critical Path Method, "Slack" (or Float) is the amount of time a task can be delayed without delaying the project. It is mathematically calculated as Late Finish minus Early Finish (LF - EF) or Late Start minus Early Start (LS - ES).

## Question 73 (Page 73)
**Which one of the following mechanisms allows execution of multiple processes by switching CPU even if the currently executing process is not completed?**
- a. Multiprocessing
- b. Monoprogramming
- c. Multiprogramming
- d. Time-sharing
- e. None

**Answer:** d. Time-sharing

**Explanation:**
- **a is incorrect:** Multiprocessing utilizes multiple physical CPUs to execute tasks genuinely simultaneously, rather than switching them on a single CPU.
- **b is incorrect:** Monoprogramming runs one process from start to completion.
- **c is incorrect:** Pure multiprogramming switches processes only when the active process blocks for I/O, not pre-emptively.
- **d is correct:** Time-sharing (multitasking) systems allocate brief "time slices" of the CPU to multiple processes. The OS rapidly context-switches between them to create the illusion of simultaneous execution.

## Question 74 (Page 74)
**Consider the following method, setValue, which adds a value into an array list**
```java
public void setValue (int position, String valueIn) {
    list[position-1] = valueIn;
}
```
**Assuming that list has been declared as an array of Strings, which one of the following might cause the setValue method to throw an ArrayIndexOutOfBounds exception:**
- a. the return type being declared as void;
- b. not declaring the method static;
- c. the type of the parameter position being declared as an int;
- d. the value of the first parameter ;
- e. the method having more than one parameter;

**Answer:** d. the value of the first parameter ;

**Explanation:**
- **a is incorrect:** Void methods do not trigger array exceptions.
- **b is incorrect:** Instance methods are perfectly valid and don't trigger crashes.
- **c is incorrect:** Arrays require integer indexes in Java, so declaring it as an `int` is correct.
- **d is correct:** Because the array is accessed via `list[position-1]`, passing `position = 0` attempts to access index -1. Passing a position larger than the array length attempts to access beyond the end of the array, triggering an exception.
- **e is incorrect:** Methods frequently have multiple parameters.

## Question 75 (Page 75)
*(Duplicate of Question 74)*
**Consider the following method, setValue, which adds a value into an array list**
```java
public void setValue (int position, String valueIn) {
    list[position-1] = valueIn;
}
```
**Assuming that list has been declared as an array of Strings, which one of the following might cause the setValue method to throw an ArrayIndexOutOfBounds exception:**
- a. the return type being declared as void;
- b. not declaring the method static;
- c. the type of the parameter position being declared as an int;
- d. the value of the first parameter ;
- e. the method having more than one parameter;

**Answer:** d. the value of the first parameter ;
**Explanation:** See Question 74.

## Question 76 (Page 76)
**What is the primary objective of virtual memory in a computer system?**
- a. secure part of memory from being accessed by other processes
- b. allow processes use more memory than physical available
- c. None
- d. increase execution speed by catching frequently used data
- e. increase the physical memory capacity

**Answer:** b. allow processes use more memory than physical available

**Explanation:**
- **a is incorrect:** Memory protection isolates processes, but that is handled by the MMU, not specifically the "virtual" extension to disk.
- **b is correct:** Virtual memory utilizes hard drive space (a pagefile or swap partition) to simulate extra RAM, allowing the OS to run massive applications that exceed physical RAM limits.
- **d is incorrect:** Virtual memory significantly slows down execution due to disk I/O; increasing speed is the job of CPU cache memory.
- **e is incorrect:** The OS cannot magically install new physical RAM hardware.

## Question 77 (Page 77)
**A class called Network has been declared. Amongst its members are:**
**`* an attribute maxNumberOfUsers of type int that has been declared as private;`**
**`* an attribute currentNumberOfUsers of type int that has been declared as private;`**
**`* a method setMaxNumberOfUsers that has been declared as public and requires one parameter of type int;`**
**`* a method getMaxNumberOfUsers that has been declared as public, requires no parameters and returns an int.`**
**A class SubNet has been declared with the following header:**
`class SubNet extends Network`
**In a program that declares and initializes an object sub of the class SubNet, which of the following statements would NOT cause a compiler error?**
- a. sub.currentNumberOfUsers = sub.getMaxNumberOfUsers();
- b. sub.setMaxNumberOfUsers(sub.getMaxNumberOfUsers());
- c. sub.maxNumberOfUsers = 3;
- d. sub.setMaxNumberOfUsers("3");
- e. sub.setMaxNumberOfUsers(sub.currentNumberOfUsers);

**Answer:** b. sub.setMaxNumberOfUsers(sub.getMaxNumberOfUsers());

**Explanation:**
- **a is incorrect:** The attribute `currentNumberOfUsers` is `private` in the parent class, preventing the child class from directly accessing it.
- **b is correct:** Both `setMaxNumberOfUsers` and `getMaxNumberOfUsers` are `public` methods in the parent class, meaning the child class securely inherits them and can invoke them freely without error.
- **c is incorrect:** The attribute `maxNumberOfUsers` is `private`.
- **d is incorrect:** The method `setMaxNumberOfUsers` requires an integer, but `"3"` is a String.
- **e is incorrect:** It attempts to directly access the private attribute `currentNumberOfUsers`.

## Question 78 (Page 78)
*(Duplicate of Question 77)*
**A class called Network has been declared. Amongst its members are:**
**`* an attribute maxNumberOfUsers of type int that has been declared as private;`**
...
**In a program that declares and initializes an object sub of the class SubNet, which of the following statements would NOT cause a compiler error?**
- a. sub.currentNumberOfUsers = sub.getMaxNumberOfUsers();
- b. sub.setMaxNumberOfUsers(sub.getMaxNumberOfUsers());
...

**Answer:** b. sub.setMaxNumberOfUsers(sub.getMaxNumberOfUsers());
**Explanation:** See Question 77.

## Question 79 (Page 79)
**Which of the following sorting algorithms has the best average-case time complexity?**
- a. Insertion Sort
- b. Bubble Sort
- c. Quick Sort
- d. Selection Sort

**Answer:** c. Quick Sort

**Explanation:**
- **a is incorrect:** Insertion sort operates at $O(n^2)$ on average.
- **b is incorrect:** Bubble sort operates at $O(n^2)$ on average.
- **c is correct:** Quick sort uses a divide-and-conquer strategy, achieving an average-case time complexity of $O(n \log n)$, making it far superior to the quadratic algorithms listed.
- **d is incorrect:** Selection sort operates at $O(n^2)$ on average.

## Question 80 (Page 80)
**What is the primary purpose of the RecyclerView widget?**
- a. To provide a simple button with click functionality
- b. To display a single image on the screen
- c. To display lists of data by efficiently reusing item views.
- d. To manage background tasks efficiently.

**Answer:** c. To display lists of data by efficiently reusing item views.

**Explanation:**
- **a is incorrect:** This describes the standard `Button` widget.
- **b is incorrect:** This describes an `ImageView`.
- **c is correct:** The `RecyclerView` in Android is specifically engineered to render massive lists of dynamic data. When a list item scrolls off-screen, its UI View is "recycled" and populated with new data appearing at the bottom, drastically saving memory and CPU.
- **d is incorrect:** UI widgets cannot manage background threads or tasks; that requires mechanisms like Coroutines or `WorkManager`.

## Question 81 (Page 81)
**If an algorithm has a time complexity of O(n^2), what happens to the running time if the input size is doubled?**
- a. It remains the same
- b. It quadruples
- c. It doubles
- d. It triples

**Answer:** b. It quadruples

**Explanation:**
- **a is incorrect:** This would only be true for an $O(1)$ algorithm.
- **b is correct:** A time complexity of $O(n^2)$ means time scales quadratically. If the new input is $2n$, the new time is $(2n)^2 = 4n^2$. Thus, the execution time increases by a factor of 4 (quadruples).
- **c is incorrect:** This would be true for an $O(n)$ (linear) algorithm.
- **d is incorrect:** Basic mathematical squares ($2^2$) result in 4, not 3.

## Question 82 (Page 82)
*(Duplicate of Question 81)*
**If an algorithm has a time complexity of O(n^2), what happens to the running time if the input size is doubled?**
- a. It remains the same
- b. It quadruples
- c. It doubles
- d. It triples

**Answer:** b. It quadruples
**Explanation:** See Question 81.

## Question 83 (Page 83)
**Which of the following is not true about functions in python?**
- a. Function definitions can alter flow of execution
- b. Functions are reusable pieces of program
- c. Python allows user defined functions
- d. Functions provide better modularity for your programs

**Answer:** a. Function definitions can alter flow of execution

**Explanation:**
- **a is correct:** This statement is the FALSE one. A function *definition* (`def func():`) simply registers the code block in memory. It does absolutely nothing to alter the flow of execution. The execution flow is only altered when a function is explicitly *called* (`func()`).
- **b is incorrect:** This statement is true; reusability is a core feature of functions.
- **c is incorrect:** This statement is true; Python supports extensive user-defined functions.
- **d is incorrect:** This statement is true; breaking code into functions is the cornerstone of modularity.

## Question 84 (Page 84)
**Which of the following data structures uses the LIFO (Last In First Out) principle?**
- a. Stack
- b. Linked List
- c. Binary Tree
- d. Queue

**Answer:** a. Stack

**Explanation:**
- **a is correct:** A Stack strictly enforces LIFO. Just like a physical stack of plates, the last item placed (pushed) onto the top of the stack is the first item removed (popped).
- **b is incorrect:** Linked lists allow elements to be accessed, inserted, or removed from anywhere in the chain.
- **c is incorrect:** A Binary Tree organizes data hierarchically, not sequentially by LIFO.
- **d is incorrect:** A Queue enforces FIFO (First-In, First-Out), like a line of people at a store.

## Question 85 (Page 85)
**What is the main difference between TCP flow control and congestion control?**
- a. Flow control manages sender's rate; congestion control manages router buffers
- b. They are the same
- c. Congestion control prevents collisions
- d. Flow control works only on wireless networks

**Answer:** a. Flow control manages sender's rate; congestion control manages router buffers

**Explanation:**
- **a is correct:** Flow control ensures the sender doesn't transmit data faster than the specific *receiver* can process it (by using a receive window). Congestion control ensures the sender doesn't transmit data faster than the *intermediary network routers* can handle it (by utilizing a congestion window).
- **b is incorrect:** They address two entirely different bottlenecks.
- **c is incorrect:** Media access controls (like CSMA/CD) handle physical collisions, not TCP congestion control.
- **d is incorrect:** TCP operates universally over wired and wireless environments.

## Question 86 (Page 86)
**Memory management mechanism, in which each process is divided into equal-sized units and memory is divided into equal-sized frames so that each fragment of a process fits into a frame, is called;**
- a. None
- b. Paging
- c. Segmentation
- d. Memory hierarchy
- e. Swapping

**Answer:** b. Paging

**Explanation:**
- **a is incorrect:** Option b provides the exact terminology.
- **b is correct:** Paging specifically eliminates external fragmentation by separating logical memory into equal blocks called "pages" and mapping them directly to physical memory blocks called "frames".
- **c is incorrect:** Segmentation divides memory into variable-sized blocks based on logical units (like functions or objects), not equal-sized frames.
- **d is incorrect:** Memory hierarchy describes the tiered architecture of cache/RAM/Disk.
- **e is incorrect:** Swapping involves evicting entire processes to disk.

## Question 87 (Page 87)
**What is the main function of the three-way handshake in TCP?**
- a. Authentication
- b. Reliable data delivery
- c. Connection setup and synchronization
- d. Flow control

**Answer:** c. Connection setup and synchronization

**Explanation:**
- **a is incorrect:** Cryptographic authentication is handled by higher-level protocols like TLS/SSL.
- **b is incorrect:** Reliable data delivery is handled *after* the handshake using sequence numbers and ACKs.
- **c is correct:** The SYN, SYN-ACK, ACK handshake allows the client and server to agree to establish a connection and safely synchronize their initial sequence numbers before transferring any data.
- **d is incorrect:** While window sizes are advertised, the core act of continuous flow control happens during data transmission.

## Question 88 (Page 88)
**In the TCP/IP model, which layer corresponds to the Transport layer of OSI?**
- a. Application
- b. Internet
- c. Network Access
- d. Transport

**Answer:** d. Transport

**Explanation:**
- **a is incorrect:** The TCP/IP Application layer collapses the top three OSI layers (Application, Presentation, Session).
- **b is incorrect:** The Internet layer correlates directly to the OSI Network layer (Layer 3).
- **c is incorrect:** Network Access correlates to the OSI Data Link and Physical layers.
- **d is correct:** The TCP/IP Transport layer maps perfectly 1:1 with the OSI Transport layer (Layer 4), housing protocols like TCP and UDP to handle host-to-host multiplexed communication.

## Question 89 (Page 89)
**Return of Investment (ROI) ROI = ________________________**
- a. (Cost - Gain)/ Cost
- b. (Cost - Gain)/Gain
- c. (Gain - Cost)/Cost
- d. (Gain - Cost)/Gain

**Answer:** c. (Gain - Cost)/Cost

**Explanation:**
- **a is incorrect:** Subtracting Gain from Cost yields a negative number for profitable investments.
- **b is incorrect:** The formula divides by Cost, not Gain.
- **c is correct:** To calculate ROI, you first find the net profit by subtracting the initial Cost from the final Gain. You then divide this net profit by the initial Cost to get a percentage yield.
- **d is incorrect:** The denominator in financial ROI calculations is always the initial capital expended (Cost), not the final result.
