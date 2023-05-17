package com.kvhuynh.server.models;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.kvhuynh.server.models.enums.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotEmpty(message="First Name is required!")
    @Size(min=3, max=30, message="name must be between 3 and 30 characters")
    private String firstName;

	@NotEmpty(message="Last Name is required!")
    @Size(min=3, max=30, message="name must be between 3 and 30 characters")
    private String lastName;
    
    
    @NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String email;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String password;
    
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
    
	@Transient
    @NotEmpty(message="Please confirm password")
	private String confirmPassword;

	@Enumerated(EnumType.STRING)
	private Role role;


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		return List.of(new SimpleGrantedAuthority(role.name()));
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
 
}


// package com.kvhuynh.server.models;

// import java.util.Date;

// import javax.validation.constraints.Size;

// import org.springframework.format.annotation.DateTimeFormat;

// // import javax.persistence.Column;
// // import javax.persistence.Entity;
// // import javax.persistence.GeneratedValue;
// // import javax.persistence.GenerationType;
// // import javax.persistence.Id;
// // import javax.persistence.PrePersist;
// // import javax.persistence.PreUpdate;
// // import javax.persistence.Table;
// // import javax.persistence.Transient;
// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.PrePersist;
// import jakarta.persistence.PreUpdate;
// import jakarta.persistence.Table;
// import jakarta.persistence.Transient;
// // import javax.validation.constraints.Email;
// import jakarta.validation.constraints.Email;
// // import javax.validation.constraints.NotEmpty;
// import jakarta.validation.constraints.NotEmpty;

// @Entity
// @Table(name="users")
// public class User {
    
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
    
//     @NotEmpty(message="First Name is required!")
//     @Size(min=3, max=30, message="name must be between 3 and 30 characters")
//     private String firstName;

// 	@NotEmpty(message="Last Name is required!")
//     @Size(min=3, max=30, message="name must be between 3 and 30 characters")
//     private String lastName;
    
    
//     @NotEmpty(message="Email is required!")
//     @Email(message="Please enter a valid email!")
//     private String email;
    
//     @NotEmpty(message="Password is required!")
//     @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
//     private String password;
    
// 	@Column(updatable=false)
// 	@DateTimeFormat(pattern="yyyy-MM-dd")
// 	private Date createdAt;
	
// 	@DateTimeFormat(pattern="yyyy-MM-dd")
// 	private Date updatedAt;
    
// 	@Transient
//     @NotEmpty(message="Please confirm password")
//     private String confirmPassword;


//     @PrePersist
// 	protected void onCreate() {
// 		this.createdAt = new Date();
// 	}
	
// 	@PreUpdate
// 	protected void onUpdate() {
// 		this.updatedAt = new Date();
// 	}
	
//     public User() {}

// 	public Long getId() {
// 		return id;
// 	}

// 	public void setId(Long id) {
// 		this.id = id;
// 	}

// 	public String getFirstName() {
// 		return firstName;
// 	}

// 	public void setFirstName(String firstName) {
// 		this.firstName = firstName;
// 	}

// 	public String getLastName() {
// 		return lastName;
// 	}

// 	public void setLastName(String lastName) {
// 		this.lastName = lastName;
// 	}

// 	public String getEmail() {
// 		return email;
// 	}

// 	public void setEmail(String email) {
// 		this.email = email;
// 	}

//     public Date getCreatedAt() {
// 		return createdAt;
// 	}

// 	public void setCreatedAt(Date createdAt) {
// 		this.createdAt = createdAt;
// 	}

// 	public Date getUpdatedAt() {
// 		return updatedAt;
// 	}

// 	public void setUpdatedAt(Date updatedAt) {
// 		this.updatedAt = updatedAt;
// 	}


// 	public String getPassword() {
// 		return password;
// 	}

// 	public void setPassword(String password) {
// 		this.password = password;
// 	}

// 	public String getConfirmPassword() {
// 		return confirmPassword;
// 	}

// 	public void setConfirmPassword(String confirmPassword) {
// 		this.confirmPassword = confirmPassword;
// 	}	
// }
