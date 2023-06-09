package com.ssafy.SmartMirror.repository;

import com.ssafy.SmartMirror.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    User findByEmail(String email);

    User findByEmailAndPassword(String email, String password);
}
